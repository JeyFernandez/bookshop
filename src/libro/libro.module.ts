import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { LibroImagen } from './entities/linbroImg.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Libro, LibroImagen])],
  controllers: [LibroController],
  providers: [LibroService]
})
export class LibroModule {}
