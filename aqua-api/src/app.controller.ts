import { Controller, Get,Param, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  /*@Get('/food/:foodid')
  gethi(@Param("foodid") foodid:number): any {
    return `food id = ${foodid}`
  }*/


}
