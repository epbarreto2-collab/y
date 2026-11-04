import { PrismaService } from '../prisma/prisma.service';
export declare class PedidoService {
    private prisma;
    constructor(prisma: PrismaService);
    crearPedido(nombreCliente: string, productoId: number, cantidad: number): Promise<any>;
    enviarPedido(pedidoId: number): Promise<{
        id: number;
        nombreCliente: string;
        productoId: number;
        cantidad: number;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        codigoVerificacion: string;
    }>;
    recibirPedido(pedidoId: number, codigoIngresado: string): Promise<{
        id: number;
        nombreCliente: string;
        productoId: number;
        cantidad: number;
        estado: import("@prisma/client").$Enums.EstadoPedido;
        codigoVerificacion: string;
    }>;
}
