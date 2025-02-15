import api from "./api";
import Role from "@/interfaces/Role";
import AbstractService from "./AbstractService";
import User, { UserDTO } from "@/interfaces/User";

export interface QueryUser {
    name?: string,
    role?: Role,
    phone?: string,
}

export default class UserService extends AbstractService<User, Object, QueryUser> {
    constructor() {
        super("/users");
    }

    create(userDTO: UserDTO) {
        return api.post(super.URL, userDTO);
    }

    updateProfilePhoto(userId: string, formData: FormData) {
        return api.put(`/profilePhoto/${userId}`, formData);
    }
    
};
