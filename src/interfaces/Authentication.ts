import User from "./User";

export interface AuthenticationDTO {
    email: string;
    password: string;
}

export default interface AuthenticationResponse {
    user: User;
    accessToken: string;
    refreshToken: string;
}