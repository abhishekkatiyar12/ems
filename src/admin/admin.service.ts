import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminDto } from './dto/admin.dto';
import { Admin } from './schema/admin.schema';  

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private readonly adminModel: Model<Admin>,
    private readonly jwtService: JwtService,  
  ) {}

  
  async AdminLogin(details: AdminDto): Promise<{ msg: string; token: string }> {
    const { email, password } = details;
    
    try {
      
      const admin = await this.adminModel.findOne({ email });

      if (!admin) {
        throw new NotFoundException('Admin not found');
      }

      
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
      }

      
      const payload = { email: admin.email, id: admin._id }; 
      const token = this.jwtService.sign(payload);  

      return { msg: 'Login successful', token };  
    } catch (error) {
      throw new HttpException(error.message || 'Login failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  
  async createAdmin(adminDto: AdminDto): Promise<{Admin,msg:string}> {
    const { email, password } = adminDto;

    try {
      
      const existingAdmin = await this.adminModel.findOne({ email });
      if (existingAdmin) {
        throw new HttpException('Admin with this email already exists', HttpStatus.BAD_REQUEST);
      }

      
      const hashedPassword = await bcrypt.hash(password, 10);

      
      const result =await this.adminModel.create({
        email:email,
        password: hashedPassword,
      });

      

      console.log(result)

      return {
        msg: 'Admin successfully created',
        Admin: result,  
      };
    } catch (error) {
      throw new HttpException(error.message || 'Admin creation failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
