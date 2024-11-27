import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { EnquiryModule } from './enquiry/enquiry.module';
// import { RemarkModule } from './remark/remark.module';
import { AdminModule } from './admin/admin.module';
@Module({

  imports:[
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    EnquiryModule,
    AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
