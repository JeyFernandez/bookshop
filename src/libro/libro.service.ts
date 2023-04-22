import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { Libro } from './entities/libro.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>
  ){}
  async create(createLibroDto: CreateLibroDto) {
    const libro = await this.libroRepository.create()
    await this.libroRepository.save(createLibroDto)
    return libro;
  }

  findAll() {
    return this.libroRepository.find();
  }

  findOne(id: string) {
    return this.libroRepository.findOneBy({id});
  }

  async update(id: string, updateLibroDto: CreateLibroDto) {
    const findLibro = await this.findOne(id)
    const updateLibro = await this.libroRepository.merge(
      findLibro,
       updateLibroDto
       )
    return this.libroRepository.save(updateLibro)
  }

  async remove(id: string) {
    const libro = await this.findOne(id)
    await this.libroRepository.remove(libro)
    return "libro eliminado";
  }
}
