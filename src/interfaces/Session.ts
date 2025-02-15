import Role from "./Role";

export default interface Session {
    role: Role,
    userId: number,
}