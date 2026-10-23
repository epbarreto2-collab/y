"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const products_service_1 = require("../products/products.service");
let PedidoService = class PedidoService {
    prisma;
    productoService;
    constructor(prisma, productoService) {
        this.prisma = prisma;
        this.productoService = productoService;
    }
    async create(createPedidoDto) {
        const { estado, cantidad, producto: idproducto } = createPedidoDto;
        const productoExiste = await this.productoService.findOne(idproducto);
        if (!productoExiste) {
            throw new common_1.UnprocessableEntityException('El producto no existe');
        }
        const stock = 50;
        if (cantidad > stock) {
            throw new common_1.UnprocessableEntityException('La cantidad de pedido no puede superar el inventario ');
        }
        const pedidoPendiente = await this.prisma.pedido.findFirst({
            where: {
                estado: 'Pendiente',
                producto: {
                    some: {
                        idproducto: idproducto,
                    },
                },
            },
        });
        if (!pedidoPendiente) {
            throw new common_1.ConflictException('El cliente ya tiene un pedido pendiente para este producto');
        }
    }
    findAll() {
        return this.prisma.pedido.findMany();
    }
    findOne(id) {
        return this.prisma.pedido.findUnique({ where: { id } });
    }
    update(id, updatePedidoDto) {
        return this.prisma.pedido.update({
            where: { id },
            data: {
                estado: updatePedidoDto.estado,
                cantidad: updatePedidoDto.cantidad,
            },
        });
    }
    remove(id) {
        return this.prisma.pedido.delete({ where: { id } });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        products_service_1.ProductsService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map