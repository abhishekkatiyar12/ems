import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { EnquiryService } from './enquiry.service';
import { CreateEnquiry } from './dto/create-enquiry.dto';

@Controller('enquiry')
export class EnquiryController {
  constructor(private readonly enquiryService: EnquiryService) {}

  @Post('/create')
  async createEnquiry(@Body() enquiry: CreateEnquiry): Promise<CreateEnquiry> {
    return this.enquiryService.createEnquiry(enquiry);
  }

  @Get()
  async getAllEnquiries(): Promise<CreateEnquiry[]> {
    return await this.enquiryService.findAll();
  }

  @Get(':id')
  async getEnquiry(
    @Param('id')
    id: string,
  ): Promise<CreateEnquiry> {
    return this.enquiryService.findById(id);
  }


  
}
