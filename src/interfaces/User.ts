import Role from "./Role";

export interface UserDTO {
    name: string,
    role: string,
    phone: string,
    email: string,
    password: string,
}

export default interface User {
    id: number,
    name: string,
    role: Role,
    phone: string,
    email: string,
    profilePhoto: string,
}