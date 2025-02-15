import Role from "./Role";

export interface UserDTO {
    name: string,
    role: string,
    phone: string,
    email: string,
    password: string,
}

export interface UpdateUserDTO {
    name: string,
    role: string,
    phone: string,
    email: string,
}

export default interface User {
    id: number,
    name: string,
    role: Role,
    phone: string,
    email: string,
    createdAt: string,
    profilePhoto: string,
}