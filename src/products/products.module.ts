import { Module } from '@nestjs/common';
import { ProductosController } from './products.controller';
import { ProductosService } from './products.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService, PrismaService],
  exports: [ProductosService],
})
export class ProductosModule {}
