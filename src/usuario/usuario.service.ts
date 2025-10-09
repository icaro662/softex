import { Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entity/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
   constructor(
       @InjectRepository(Usuario)
       private usuarioRpository:Repository<Usuario>,
   ){}

   async create(usuarioData:UsuarioDto): Promise<Usuario> {
       const novoUsuario = this.usuarioRpository.create(usuarioData);
       return this.usuarioRpository.save(novoUsuario);
   }
}



