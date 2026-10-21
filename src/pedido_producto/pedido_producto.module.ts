import { Module } from '@nestjs/common';
import { PedidoProductoService } from './pedido_producto.service';
import { PedidoProductoController } from './pedido_producto.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PedidoProductoController],
  providers: [PedidoProductoService, PrismaService],
})
export class PedidoProductoModule {}
