import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { EnquiryController } from './enquiry/enquiry.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnquiryService } from './enquiry/enquiry.service';
import { EnquiryModule } from './enquiry/enquiry.module';
@Module({

  imports:[
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    EnquiryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
