import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductosService {
  constructor(private readonly prisma: PrismaService) {}

  async crear(data: { nombre: string; descripcion: string; stock: number }) {
    if (!data.nombre?.trim()) {
      throw new UnprocessableEntityException(
        'El nombre del producto es obligatorio',
      );
    }

    if (!Number.isInteger(data.stock) || data.stock < 0) {
      throw new UnprocessableEntityException(
        'El stock debe ser un número entero igual o mayor que cero',
      );
    }

    return this.prisma.producto.create({
      data: {
        nombre: data.nombre.trim(),
        descripcion: data.descripcion,
        stock: data.stock,
      },
    });
  }

  async listar() {
    return this.prisma.producto.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async buscarPorId(id: number) {
    const producto = await this.prisma.producto.findUnique({
      where: { id },
    });

    if (!producto) {
      throw new UnprocessableEntityException('El producto no existe');
    }

    return producto;
  }
}
