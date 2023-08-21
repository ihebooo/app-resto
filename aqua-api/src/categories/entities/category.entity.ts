import { Column, Entity, PrimaryGeneratedColumn,OneToMany } from 'typeorm';
import {Meal} from '../../meals/entities/meal.entity'

@Entity({ name: 'categorie' })
export class Category  {
  @PrimaryGeneratedColumn()
  idCategory: number;

  @Column()
  strCategory: string;

  @Column()
  strCategoryThumb: string;

  @Column()
  strCategoryDescription: string;


  @OneToMany(() => Meal, (meal) => meal.category)
  meals: Meal[];


}
