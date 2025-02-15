import { NextRequest, NextResponse } from "next/server";

import Role from "@/interfaces/Role";
import Session from "@/interfaces/Session";
import CryptoHandler from "./CryptoHandler";

export default class AuthorizationHandler {
    
    static buildAuthorization({redirect, userId, role, accessToken, refreshToken}:{redirect:string, userId: number, role:Role, accessToken:string, refreshToken:string}) {
        return `/authorization?redirect=${redirect}&userId=${userId}&role=${role}&accessToken=${accessToken}&refreshToken=${refreshToken}`;
    }

    static isAuthorized(request: NextRequest): boolean {
        try {
            return (request.cookies.has("session") &&
            request.cookies.has("accessToken") && 
            request.cookies.has("refreshToken") && 
            CryptoHandler.decode(request.cookies.get('session')!.value));
        } catch (error) {
            return false;
        }
    }

    static handleAuthorization(request: NextRequest) {
        try {
            const searchParams = new URLSearchParams(request.nextUrl.search);
            if( !searchParams.has("userId") || 
                !searchParams.has("role") || 
                !searchParams.has("redirect") || 
                !searchParams.has("accessToken") || 
                !searchParams.has("refreshToken")) {
                throw new Error("Invalid authorization parameters");
            }

            const session: Session = {
                role: searchParams.get("role") as Role,
                userId: parseInt(searchParams.get("userId") as string),
            }

            const redirect = searchParams.get('redirect') as string;
            const response =  NextResponse.redirect(new URL(redirect, request.url));
            const rememberMe = searchParams.get('rememberMe')?.toLowerCase() === "true";

            response.cookies.set("session", CryptoHandler.encode(session), {httpOnly: true, path: "/", secure: true, maxAge: rememberMe ? 86400 : undefined}); // 1 Day
            response.cookies.set("accessToken", searchParams.get("accessToken")!, {httpOnly: true, path: "/", secure: true, maxAge: rememberMe ? 86400 : undefined}); // 1 Day
            response.cookies.set("refreshToken", searchParams.get("refreshToken")!, {httpOnly: true, path: "/", secure: true, maxAge: rememberMe ? 604800 : undefined}); // 7 Days  
            return response;
        } catch (error) {
            return AuthorizationHandler.handleLogout(request);
        }
    }

    static handleLogin(request:NextRequest) {
        if (AuthorizationHandler.isAuthorized(request)) {
            return NextResponse.redirect(new URL("/", request.url)); 
        }
        return NextResponse.next();
    }

    static handleLogout(request: NextRequest) {
        const response =  NextResponse.redirect(new URL("/login", request.url));
        response.cookies.set("session", "", {maxAge: 0});
        response.cookies.set("accessToken", "", {maxAge: 0});
        response.cookies.set("refreshToken", "", {maxAge: 0});   
        return response;
    }

    static handleAuthorized(request: NextRequest) {
        return AuthorizationHandler.isAuthorized(request) ? NextResponse.next() : AuthorizationHandler.handleLogout(request);
    }
};
