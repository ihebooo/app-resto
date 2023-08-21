import { Controller, Request,UseGuards, Get,Req, Post, Body, Patch, Param, Delete, ValidationPipe, UsePipes } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createAdminDto: CreateAdminDto) : Promise<any> {
    return await this.adminService.create(createAdminDto);
  }

  @Get('/get')
  async findAll() {
    return await this.adminService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/get/:id')
  @UsePipes(ValidationPipe)
  async findOne(@Param('id') id: string) {
    return await this.adminService.findOne(+id);
  }

  @UseGuards(AuthGuard('admin'))
  @Post('login')
  async login(@Request() req) {
    return this.adminService.loginWithCredentials(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }



}
