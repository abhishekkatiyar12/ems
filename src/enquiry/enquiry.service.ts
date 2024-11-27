import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEnquiry } from './dto/create-enquiry.dto';

@Injectable()
export class EnquiryService {
  constructor( 
    @InjectModel(CreateEnquiry.name)
    private readonly enquiryModel: Model<CreateEnquiry>, // Injecting the Mongoose model
  ) {}

  async createEnquiry(enquiry: CreateEnquiry): Promise<CreateEnquiry> {
    const data = await this.enquiryModel.create(enquiry);
    return data;
  }

  // returns A list of all enquiries.
  async findAll(): Promise<CreateEnquiry[]> {
    const enquiries = await this.enquiryModel.find();
    return enquiries; 
  }

  async findById(id: string): Promise<CreateEnquiry> {
    const enquiry = await this.enquiryModel.findById(id);
    if (!enquiry) {
      throw new NotFoundException('Enquiry Not found please check your id');
    }
    return enquiry;
  }

  async deleteById(id:string):Promise<CreateEnquiry>{
    return await this.enquiryModel.findByIdAndDelete(id);
  }
}
