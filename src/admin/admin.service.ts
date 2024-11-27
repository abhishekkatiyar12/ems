import { Model } from 'mongoose';
import { Injectable, NotFoundException,HttpException,HttpStatus } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
import { InjectModel } from '@nestjs/mongoose';
import *  as bcrypt from "bcrypt";

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(AdminDto.name)
    private readonly adminModel : Model<AdminDto>,
  ){}
   
   

    async AdminLogin(details:AdminDto):Promise<{msg:string}>{
        const {email,password}=details;
        
        
        try{

        
     const admin=await this.adminModel.find({email}) ;
         if(!admin){
          throw new NotFoundException("admin not found");
         }
         const isPasswordValid = await bcrypt.compare(password,admin.password);
         if (!isPasswordValid) {
          throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
        }
        return { msg: 'Login successful' };
    
      } catch (error) {
        
        throw new HttpException(error.message || 'Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
  

}
