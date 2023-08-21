import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { JwtServiceNew } from '../jwt/jwt.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from "./entities/admin.entity"
import { hash,verify } from 'src/utils';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private AdminRepository: Repository<Admin>,
    private jwtService: JwtServiceNew,
  ) {}


  async create(createAdminDto: CreateAdminDto) : Promise<any> {

    console.log(createAdminDto)

    createAdminDto["password"] = await hash(createAdminDto["password"]);

    console.log(createAdminDto)

    return await this.AdminRepository.save(createAdminDto);
  }

  async findAll() {
    return await this.AdminRepository.find();
  }

  async findOne(id: number) {
    return await this.AdminRepository.findOne({where : {id : id}});
  }


  async getUser(username : string){

    return await this.AdminRepository.findOne({where : {username : username}});
  }

  async validateUserCredentials(
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.getUser(username);

    console.log({user})

    if(!user){

      return null
    }


    const isPasswordValid = await verify(password, user.password)

    if (!isPasswordValid) {
      return null
    }


    return user;
  }

  async loginWithCredentials(user) {
    const payload = { username: user.username };

    return {
      username: user.username,
      access_token: this.jwtService.createToken(payload),
    };
  }

}
