import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

import { BASE_URL } from "@/services/api";
import User from "@/interfaces/User";
import Session from "@/interfaces/Session";
import Role from "@/interfaces/Role";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function randomDate(start: Date, end: Date = new Date()): Date {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export function randomInt(min:number, max:number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
0
export function formatNumber(value: number) {
    return value < 10 ? `0${value}` : value;
}

export function handleResource(filename?:string) {
    return filename ? `${BASE_URL}/resources/${filename}` : "/img/avatar_placeholder.png";
}

export function buildMaxDaysOfMonths(year:number) {
    return [
        31, // JANUARY
        year % 4 === 0 ? 29 : 28, // FEBRUARY
        31, // MARCH
        30, // APRIL
        31, // MAY
        30, // JUNE
        31, // JULY
        31, // AUGUST
        30, // SEPTEMBER
        31, // OCTOBER
        30, // NOVEMBER
        31, // DECEMBER
    ]
}

export function placeholderName(name:string) {
    const array = name.split(' ');
    return array.length > 1 ? `${array[0].at(0)}${array[1].at(0)}` : array[0].at(0);
}

export function validateVisibility(user?: User, session?: Session):boolean {
    if (user?.role === Role.CLIENT) {
        return true;
    }

    if ((user?.role === Role.ADMIN && user.id === session?.userId) ||
        (user?.role === Role.ADMIN && session?.role === Role.ROOT) || 
        (user?.role === Role.ROOT && session?.role === Role.ROOT)) {
        return true;
    }
    
    return false;
}