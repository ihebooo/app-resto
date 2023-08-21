import { Entity, Column, PrimaryGeneratedColumn,ManyToOne, JoinColumn } from 'typeorm';
import {Category} from '../../categories/entities/category.entity'

@Entity({ name: 'meals' })
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idCategory: number;

  @Column()
  strMeal: string;

  @Column()
  strMealThumb: string;

  @Column()
  idMeal: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  price: number;

  @ManyToOne(() => Category, category => category.meals)
  @JoinColumn({ name: 'idCategory' })
  category: Category;

  
}
