import { IsEmail, IsNotEmpty } from 'class-validator';


export class LoginAdmin {
  
  @IsEmail()
  @IsNotEmpty({ message: 'email de de yrr' })
  email: string;

  @IsNotEmpty({ message: 'please provide password yrr' })
  password: string;
}

