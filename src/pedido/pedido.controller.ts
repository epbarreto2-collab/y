import { Controller, Post, Patch, Body, Param, ParseIntPipe } from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  // Endpoint para realizar pedido
  @Post()
  crearPedido(
    @Body('nombreCliente') nombreCliente: string,
    @Body('productoId') productoId: number,
    @Body('cantidad') cantidad: number,
  ) {
    return this.pedidoService.crearPedido(nombreCliente, productoId, cantidad);
  }

  // Endpoint para pasar de PENDIENTE a ENVIADO
  @Patch(':id/enviar')
  enviarPedido(@Param('id', ParseIntPipe) id: number) {
    return this.pedidoService.enviarPedido(id);
  }

  // Endpoint para pasar de ENVIADO a RECIBIDO con el código
  @Patch(':id/recibir')
  recibirPedido(
    @Param('id', ParseIntPipe) id: number,
    @Body('codigo') codigo: string,
  ) {
    return this.pedidoService.recibirPedido(id, codigo);
  }
}