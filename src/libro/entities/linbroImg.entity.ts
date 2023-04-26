import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Libro } from './libro.entity';
@Entity()
export class LibroImagen{
@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
url:string;

@ManyToOne(()=>Libro,(libro)=>libro.images)
libro:Libro
}