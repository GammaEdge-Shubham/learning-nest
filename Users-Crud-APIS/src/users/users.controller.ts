import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { UsersService } from "./users.service";
import type { CreateUserDTO } from "./user-dto";
import type{ Response } from "express";

@Controller("/users")
export class UsersController{
    constructor(private usersService : UsersService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    addUser(@Body() user:CreateUserDTO){
        console.log(user);
        return this.usersService.addUser(user);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    getUserById(@Param('id') id:number){
        return this.usersService.getUserById(+id);
    }

    @Put('/:id')
    @HttpCode(HttpStatus.OK)
    updateUser(@Param('id') id:number, @Body()user:CreateUserDTO){
        return this.usersService.updateUser(+id, user);
    }
    
}