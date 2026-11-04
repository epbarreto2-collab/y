import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductosService } from './products.service';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  crear(
    @Body()
    body: {
      nombre: string;
      descripcion: string;
      stock: number;
    },
  ) {
    return this.productosService.crear(body);
  }

  @Get()
  listar() {
    return this.productosService.listar();
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.buscarPorId(id);
  }
}
