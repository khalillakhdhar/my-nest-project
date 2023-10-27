import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 25 })
  name: string;
  @Column({ length: 250 })
  description: string;
}
