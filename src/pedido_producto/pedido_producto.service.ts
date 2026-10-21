import { Injectable } from '@nestjs/common';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
@Injectable()
export class PedidoProductoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPedidoProductoDto: CreatePedidoProductoDto) {
    return this.prisma.pedido_producto.create({
      data: createPedidoProductoDto as any,
    });
  }

  findAll() {
    return this.prisma.pedido_producto.findMany();
  }

  findOne(id: number) {
    return this.prisma.pedido_producto.findUnique({ where: { id } });
  }

  update(id: number, updatePedidoProductoDto: UpdatePedidoProductoDto) {
    return this.prisma.pedido_producto.update({ where: { id }, data: updatePedidoProductoDto });
  }

  remove(id: number) {
    return this.prisma.pedido_producto.delete({ where: { id } });
  }
}