import { AdminService } from './admin.service';
import { Controller,Post,Body} from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';


// 
@Controller('admin')
export class AdminController {
  constructor(private AdminService: AdminService) {}
   
    @Post('/login')  
    AdminLogin(@Body() details:AdminDto){
        return this.AdminService.AdminLogin(details); 
    } 

    @Post('Signup')
    AdminSignUp(@Body() details:AdminDto){
      return this.AdminService.createAdmin(details);
    }

}







