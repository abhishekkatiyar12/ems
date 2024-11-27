import { IsEmail, IsNotEmpty } from 'class-validator';


export class AdminDto {
  
  @IsEmail()
  @IsNotEmpty({ message: 'email de de yrr' })
  email: string;

  @IsNotEmpty({ message: 'please provide password yrr' })
  password: string;

  createdAt:Date;
  updatedAt?:Date;
}

