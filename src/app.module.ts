import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { EnquiryController } from './enquiry/enquiry.controller';

@Module({
  imports: [],
  controllers: [AppController, AdminController, EnquiryController],
  providers: [AppService],
})
export class AppModule {}
