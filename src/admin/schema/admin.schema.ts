import { Schema, SchemaFactory,Prop } from "@nestjs/mongoose";
import { IsNotEmpty,IsEmail } from "class-validator";


@Schema()
export class Admin{
    @IsEmail()
    @Prop()
    // @IsNotEmpty({ message: 'email de de yrr' })
    email: string;

    @Prop()
    // @IsNotEmpty({ message: 'please provide password yrr' })
    password: string;
}

export const createAdminSchema= SchemaFactory.createForClass(Admin);