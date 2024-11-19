import { IsEmail, IsNotEmpty } from 'class-validator';
import { spec } from 'node:test/reporters';

export class LoginAdmin {
  
  @IsEmail()
  @IsNotEmpty({ message: 'email de de yrr' })
  email: string;

  @IsNotEmpty({ message: 'please provide paswword yrr' })
  password: string;
}

