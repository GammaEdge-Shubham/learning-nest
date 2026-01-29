import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./user-dto";

@Injectable()
export class UsersService {
    private users = new Map<number,CreateUserDTO>();

    addUser(user:CreateUserDTO){
        this.users.set(user.id, user);
        return this.users.get(user.id);
    }

    getAllUsers(){
        return Array.from(this.users).map(([_,user])=>user);
    }

    getUserById(id:number){
        return this.users.get(id);
    }

    updateUser(id:number, user:CreateUserDTO){
        const prev = this.users.get(id);
        if(!prev) return "invalid id or user not present";
        this.users.set(id, {...prev, ...user});
        return this.users.get(id);
    }
}