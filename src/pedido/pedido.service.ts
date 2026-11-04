import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EstadoPedido } from '@prisma/client';

@Injectable()
export class PedidoService {
  constructor(private prisma: PrismaService) {}

  async crearPedido(nombreCliente: string, productoId: number, cantidad: number) {
    // 1. Validar que el producto exista
    const producto = await this.prisma.producto.findUnique({
      where: { id: productoId },
    });

    if (!producto) {
      throw new NotFoundException('El producto no existe.');
    }

    // 2. Validar que el cliente no tenga un pedido pendiente
    const pedidoPendiente = await this.prisma.pedido.findFirst({
      where: {
        nombreCliente,
        estado: EstadoPedido.PENDIENTE,
      },
    });

    if (pedidoPendiente) {
      throw new BadRequestException('El cliente ya tiene un pedido en estado PENDIENTE.');
    }

    // 3. Validar stock suficiente
    if (producto.stock < cantidad) {
      throw new BadRequestException('No hay suficiente stock disponible para este producto.');
    }

    // 4. Generar código de verificación aleatorio (6 dígitos)
    const codigoVerificacion = Math.floor(100000 + Math.random() * 900000).toString();

    // 5. Crear el pedido y descontar el stock en una transacción
    return this.prisma.$transaction(async (tx: { producto: { update: (arg0: { where: { id: number; }; data: { stock: number; }; }) => any; }; pedido: { create: (arg0: { data: { nombreCliente: string; productoId: number; cantidad: number; estado: "PENDIENTE"; codigoVerificacion: string; }; }) => any; }; }) => {
      // Reducir el stock del producto
      await tx.producto.update({
        where: { id: productoId },
        data: { stock: producto.stock - cantidad },
      });

      // Registrar el pedido
      return tx.pedido.create({
        data: {
          nombreCliente,
          productoId,
          cantidad,
          estado: EstadoPedido.PENDIENTE,
          codigoVerificacion,
        },
      });
    });
  }

  async enviarPedido(pedidoId: number) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });

    if (!pedido) {
      throw new NotFoundException('El pedido no existe.');
    }

    if (pedido.estado !== EstadoPedido.PENDIENTE) {
      throw new BadRequestException('El pedido debe estar en estado PENDIENTE para ser enviado.');
    }

    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { estado: EstadoPedido.ENVIADO },
    });
  }

  async recibirPedido(pedidoId: number, codigoIngresado: string) {
    const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });

    if (!pedido) {
      throw new NotFoundException('El pedido no existe.');
    }

    // Regla: Debe estar en estado ENVIADO antes de marcarse como RECIBIDO
    if (pedido.estado !== EstadoPedido.ENVIADO) {
      throw new BadRequestException('El pedido debe estar en estado ENVIADO antes de recibirlo.');
    }

    // Regla: Validar el código de verificación
    if (pedido.codigoVerificacion !== codigoIngresado) {
      throw new BadRequestException('El código de verificación es incorrecto.');
    }

    return this.prisma.pedido.update({
      where: { id: pedidoId },
      data: { estado: EstadoPedido.RECIBIDO },
    });
  }
}