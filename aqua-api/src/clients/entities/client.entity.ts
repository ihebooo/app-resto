
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name:"clients"})
export class Client {

  @PrimaryGeneratedColumn('increment',{
    type: 'integer',
    name: 'id',
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'firstname',
  })
  firstname: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'lastname',
  })
  lastname: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
    name: 'email',
  })
  email: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'password',
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    name: 'phone',
  })
  phone: string;
}
