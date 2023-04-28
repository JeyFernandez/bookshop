import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { Libro } from './entities/libro.entity';
import { LibroImagen } from './entities/linbroImg.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,

    @InjectRepository(LibroImagen)
    private readonly libroImagenRepository: Repository<LibroImagen>
  ){}

  async create (libroDto:CreateLibroDto){
    const {images = [], ...detallelibro}= libroDto
    const libro = await this.libroRepository.create({
        ...detallelibro,
        images: images.map((image)=> 
        this.libroImagenRepository.create({url: image}))
    })
    await this.libroRepository.save(libro);
    return libro;
  }

  findAll() {
    return this.libroRepository.find({relations:{images: true,}});
  }

  findOne(id: string) {
    return this.libroRepository.findOneBy({id});
  }

    async update(id: string, cambio: CreateLibroDto){
        const libro = await this.libroRepository.preload({
            id: id,
            ...cambio,
            images:[],
        });
        await this.libroRepository.save(libro);
        return libro;
    }
    ss
  async remove(id: string) {
    const libro = await this.findOne(id)
    await this.libroRepository.remove(libro)
    return "libro eliminado";
  }
}
