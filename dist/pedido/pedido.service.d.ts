import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
export declare class PedidoService {
    private readonly prisma;
    private readonly productoService;
    constructor(prisma: PrismaService, productoService: ProductsService);
    create(createPedidoDto: CreatePedidoDto): Promise<void>;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updatePedidoDto: UpdatePedidoDto): any;
    remove(id: number): any;
}
