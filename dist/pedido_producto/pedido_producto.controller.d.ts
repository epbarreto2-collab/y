import { PedidoProductoService } from './pedido_producto.service';
import { CreatePedidoProductoDto } from './dto/create-pedido_producto.dto';
import { UpdatePedidoProductoDto } from './dto/update-pedido_producto.dto';
export declare class PedidoProductoController {
    private readonly pedidoProductoService;
    constructor(pedidoProductoService: PedidoProductoService);
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
    findOne(id: string): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    update(id: string, updatePedidoProductoDto: UpdatePedidoProductoDto): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): import("../generated/prisma/models").Prisma__pedido_productoClient<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
}
