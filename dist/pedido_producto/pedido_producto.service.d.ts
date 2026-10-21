import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
export declare class PedidoProductoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPedidoProductoDto: CreatePedidoProductoDto): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: number;
        idpedido: number;
        idproducto: number;
    }[]>;
    findOne(id: number): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: number, updatePedidoProductoDto: UpdatePedidoProductoDto): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: number): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
