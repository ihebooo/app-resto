import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'orders' })
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_id: number;

  @Column()
  cat_id: number;

  @Column()
  meal_id: number;

  @Column()
  price: number;

  @Column()
  status: string;

  @Column()
  is_accepted: boolean;

  @Column()
  date: Date;
}
