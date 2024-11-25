import { EnquiryController } from './enquiry.controller';
import { Module } from '@nestjs/common';
import { EnquiryService } from './enquiry.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CreateEnquirySchema } from './schema/enquiry.schema';


@Module({
    imports :[
        MongooseModule.forFeature([
            {
                name:'CreateEnquiry',
                schema:CreateEnquirySchema,
                collection:'CreateEnquiry',
            }
        ])
    ],
    controllers:[EnquiryController],
  providers: [EnquiryService]
})
export class EnquiryModule {}
