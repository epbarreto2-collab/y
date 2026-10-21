import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class PedidoService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPedidoDto: CreatePedidoDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updatePedidoDto: UpdatePedidoDto): any;
    remove(id: number): any;
}
