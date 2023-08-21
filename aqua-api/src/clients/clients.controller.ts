import { Controller,Request,UseGuards, Headers, Get, Post, Body,Req, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { AuthGuard } from '@nestjs/passport';
import {JwtStrategy} from './auth/strategies/jwt.strategy'
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createClientDto: CreateClientDto): Promise<any> { 

    return await this.clientsService.create(createClientDto);
  }

  @UseGuards(AuthGuard('jwt_client'))
  @Get('profile')
  getProfile(@Req() req) {

    return req.user;
  }


  @Get('/get')
  findAll() {
    return this.clientsService.findAll();
  }

  @Get('/get/:id')
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(+id);
  }


  @UseGuards(AuthGuard('client'))
  @Post('login')
  async login(@Request() req) {
   
    return this.clientsService.loginWithCredentials(req.user);
  }


}
