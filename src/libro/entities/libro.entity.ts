import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LibroImagen } from './linbroImg.entity';

@Entity()
export class Libro {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    author: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @OneToMany(
        ()=>LibroImagen,
        (libroImage)=> libroImage.libro,
        {onDelete:'CASCADE'}
    )
    images?:LibroImagen[];
}
