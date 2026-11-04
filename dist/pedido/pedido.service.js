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
const client_1 = require("@prisma/client");
let PedidoService = class PedidoService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearPedido(nombreCliente, productoId, cantidad) {
        const producto = await this.prisma.producto.findUnique({
            where: { id: productoId },
        });
        if (!producto) {
            throw new common_1.NotFoundException('El producto no existe.');
        }
        const pedidoPendiente = await this.prisma.pedido.findFirst({
            where: {
                nombreCliente,
                estado: client_1.EstadoPedido.PENDIENTE,
            },
        });
        if (pedidoPendiente) {
            throw new common_1.BadRequestException('El cliente ya tiene un pedido en estado PENDIENTE.');
        }
        if (producto.stock < cantidad) {
            throw new common_1.BadRequestException('No hay suficiente stock disponible para este producto.');
        }
        const codigoVerificacion = Math.floor(100000 + Math.random() * 900000).toString();
        return this.prisma.$transaction(async (tx) => {
            await tx.producto.update({
                where: { id: productoId },
                data: { stock: producto.stock - cantidad },
            });
            return tx.pedido.create({
                data: {
                    nombreCliente,
                    productoId,
                    cantidad,
                    estado: client_1.EstadoPedido.PENDIENTE,
                    codigoVerificacion,
                },
            });
        });
    }
    async enviarPedido(pedidoId) {
        const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });
        if (!pedido) {
            throw new common_1.NotFoundException('El pedido no existe.');
        }
        if (pedido.estado !== client_1.EstadoPedido.PENDIENTE) {
            throw new common_1.BadRequestException('El pedido debe estar en estado PENDIENTE para ser enviado.');
        }
        return this.prisma.pedido.update({
            where: { id: pedidoId },
            data: { estado: client_1.EstadoPedido.ENVIADO },
        });
    }
    async recibirPedido(pedidoId, codigoIngresado) {
        const pedido = await this.prisma.pedido.findUnique({ where: { id: pedidoId } });
        if (!pedido) {
            throw new common_1.NotFoundException('El pedido no existe.');
        }
        if (pedido.estado !== client_1.EstadoPedido.ENVIADO) {
            throw new common_1.BadRequestException('El pedido debe estar en estado ENVIADO antes de recibirlo.');
        }
        if (pedido.codigoVerificacion !== codigoIngresado) {
            throw new common_1.BadRequestException('El código de verificación es incorrecto.');
        }
        return this.prisma.pedido.update({
            where: { id: pedidoId },
            data: { estado: client_1.EstadoPedido.RECIBIDO },
        });
    }
};
exports.PedidoService = PedidoService;
exports.PedidoService = PedidoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PedidoService);
//# sourceMappingURL=pedido.service.js.map