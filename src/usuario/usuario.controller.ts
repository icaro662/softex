import { Body, Controller, Post, Get, Param, Put, Delete, Patch, HttpCode } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('usuario')
export class UsuarioController {
   constructor(private readonly usuarioService: UsuarioService){}


   @Post()
   create(@Body() usuarioData: UsuarioDto){
       return this.usuarioService.create(usuarioData);
   }

    @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UsuarioDto) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

  @Patch(':id')
  updatePartial(@Param('id') id: string, @Body() updateUsuarioDto: Partial<UsuarioDto>) {
    return this.usuarioService.update(+id, updateUsuarioDto);
  }

 @Delete(':id')
   @HttpCode(204)
   remove(@Param('id') id: number): Promise<void> {
       return this.usuarioService.remove(id);
   }
}


