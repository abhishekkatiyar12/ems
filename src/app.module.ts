import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { EnquiryController } from './enquiry/enquiry.controller';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports:[MongooseModule.forRoot('mongodb://localhost/ems')],
  controllers: [AppController, AdminController, EnquiryController],
  providers: [AppService],
})
export class AppModule {}
