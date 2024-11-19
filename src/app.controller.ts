import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return {
      msg:"ashu"
    };
  }

  
  @Get("/login")
  login(){
    return '<h1>ashu</h1>'
    
    
    
  }



}
