import { PedidoService } from './pedido.service';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    crearPedido(nombreCliente: string, productoId: number, cantidad: number): Promise<any>;
    enviarPedido(id: number): Promise<{
        id: number;
        nombreCliente: string;
        productoId: number;
        cantidad: number;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        codigoVerificacion: string;
    }>;
    recibirPedido(id: number, codigo: string): Promise<{
        id: number;
        nombreCliente: string;
        productoId: number;
        cantidad: number;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        codigoVerificacion: string;
    }>;
}
