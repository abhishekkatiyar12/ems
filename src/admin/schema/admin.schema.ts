import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsNotEmpty,IsEmail } from "class-validator";


@Schema()
export class Admin{
    @IsEmail()
    @IsNotEmpty({ message: 'email de de yrr' })
    email: string;
  
    @IsNotEmpty({ message: 'please provide password yrr' })
    password: string;
}

export const createAdminSchema= SchemaFactory.createForClass(Admin);