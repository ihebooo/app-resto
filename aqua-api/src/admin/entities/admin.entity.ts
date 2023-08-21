import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Admin {

    @PrimaryGeneratedColumn('increment',{
        type: 'integer',
        name: 'id',
      })
      id : number;
    
      @Column({
        type: 'varchar',
        unique: true,
        nullable :false,
        name: 'username',
      })
      username : string;
    
      @Column({
        type: 'varchar',
        nullable :false,
        name: 'password',
      })
      password : string;
    

}
