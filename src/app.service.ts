import { CreateEnquiry } from './enquiry/enquiry.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }


  createAdmin(){
    return 'TODO IS CREATED'
  }

  CreateEnquiry(){
    return 'enquiry created'
  }

}

