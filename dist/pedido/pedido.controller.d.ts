import { PedidoService } from './pedido.service';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
export declare class PedidoController {
    private readonly pedidoService;
    constructor(pedidoService: PedidoService);
    create(createPedidoDto: CreatePedidoDto): any;
    findAll(): any;
    findOne(id: string): any;
    update(id: string, updatePedidoDto: UpdatePedidoDto): any;
    remove(id: string): any;
}
