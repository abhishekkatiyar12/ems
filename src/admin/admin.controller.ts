import { AppService } from './../app.service';
import { Controller, Get,Post,Body,Put, Param, Delete,HttpException,HttpStatus} from '@nestjs/common';
import {  LoginAdmin } from './admin.dto';



@Controller('admin')
export class AdminController {
  constructor(private appservice: AppService) {}
   
 private Admins=[];  



  @Post('/Login')
  createAdmin(@Body() data:LoginAdmin) {
  
    const email=data.email;
    const password=data.password;

  //logic for login 

  try {
    // will check for the login, email && password
    const checking = this.validateAdmin(email,password)
    if (!checking) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    const item={
        ...data,
        LoggedInAt:new Date().toLocaleString(),
    }
   
    this.Admins.push(item);   // this will update in db
    return {
        ...data,
        Data:this.Admins,
        length:this.Admins.length,
        msg:"Admin is loggedin"
    };
  } catch (error) {
    throw new HttpException(error.message, error.status);
  }
}



  @Get("/get-AllAdmin")
  getAdmin(){
    return{
     Admins:this.Admins,
     total:this.Admins.length,
     msg:" all Admin fetched "
  }
  }



  @Delete("/delete/:id")
   deleteTodoById(@Param("id") id:number){
    const new_Admins=this.Admins.filter((cur)=>cur.id!=id)

    this.Admins=new_Admins;
    return {
        msg:"Admin is deleted"
    }
   }




   private validateAdmin(email: string, password: string):boolean {
    const validEmail = 'admin@google.com'; //this emil will fetch from the db and corresponding to this we will fwtch the password which is being stored in hashed format 
    const validPassword = 'password123'; // hashed password
    //jo email user se ayyegga use hashed krk same secret key k sath m validpassword k sath match krenge 
    return email === validEmail && password === validPassword;
  }
}
