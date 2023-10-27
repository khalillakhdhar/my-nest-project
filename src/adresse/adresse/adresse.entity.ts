/* eslint-disable prettier/prettier */
import { IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
//import { isNumber } from "util";

@Entity()
export class Adresse {
    @PrimaryGeneratedColumn()
   id: number;
   @Column()
   
   rue: string;
  @IsNumber()
   @Column( { length: 6 })

   codepostale:string;
   @Column({length:100})
   pays:string;
}
