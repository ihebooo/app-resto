import { Injectable,ForbiddenException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,QueryFailedError,  } from 'typeorm';
import { Client } from "./entities/client.entity"
import { hash,verify } from 'src/utils';
import { JwtServiceNew } from '../jwt/jwt.service';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private ClientRepository: Repository<Client>,
    private jwtService: JwtServiceNew,
  ) {}
  async create(createClientDto: CreateClientDto) : Promise<any> {

    try {
      createClientDto["password"] = await hash(createClientDto["password"]);

      return await this.ClientRepository.save(createClientDto);
      } catch (error) {

        throw new ForbiddenException(error.message);

    }
  }

  async findAll() {
    return await this.ClientRepository.find();
  }

  async findOne(id: number) {
    return await this.ClientRepository.findOne({where : {id : id}});
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
  async getUser(email : string){
    
    return await this.ClientRepository.findOne({where : {email : email}});
  }

  async validateUserCredentials(
    email: string,
    password: string,
  ): Promise<any> {
    const user = await this.getUser(email);


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

    const payload = { id: user.id, email: user.email };

    return {
      email: user.email,
      access_token: this.jwtService.createToken(payload),
      expiredAt: Date.now() + 60000,
    };
  }

}
