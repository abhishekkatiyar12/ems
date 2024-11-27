import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin, createAdminSchema } from './schema/admin.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Admin.name, schema: createAdminSchema },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'Abhishek1234@', 
      signOptions: { expiresIn: '1h' }, 
    }),
  ],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
