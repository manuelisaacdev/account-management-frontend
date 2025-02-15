import { NextRequest } from "next/server";
import AuthorizationHandler from "./lib/AuthorizationHandler";

export default function middleware(request: NextRequest) {
    switch(request.nextUrl.pathname) {
        // case "/login": return AuthorizationHandler.handleLogin(request);
        case "/logout": return AuthorizationHandler.handleLogout(request);
        case "/authorization": return AuthorizationHandler.handleAuthorization(request);
        default: return AuthorizationHandler.handleAuthorized(request);
    }
}

export const config = {
    matcher: [
        "/", "/logout", "/authorization", 
        "/users/:path*", "/profile/:path*",
    ],
};