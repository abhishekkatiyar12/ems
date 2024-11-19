import { Controller,Body,Post } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { CreateEnquiry } from './enquiry.dto';

@Controller('enquiry')
export class EnquiryController {
    constructor(private appservice: AppService){}

     private enquiries=[];

 @Post('/create')
 createEnquiry(@Body() data:CreateEnquiry) {
     const item={
        ...data,
          id:new Date().getTime(),
     }
     this.enquiries.push(item);
     return {
        data:this.enquiries,
        length:this.enquiries.length
     };
 }
    }

