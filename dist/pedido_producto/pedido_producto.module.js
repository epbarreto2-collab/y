"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoProductoModule = void 0;
const common_1 = require("@nestjs/common");
const pedido_producto_service_1 = require("./pedido_producto.service");
const pedido_producto_controller_1 = require("./pedido_producto.controller");
const prisma_service_1 = require("../prisma/prisma.service");
let PedidoProductoModule = class PedidoProductoModule {
};
exports.PedidoProductoModule = PedidoProductoModule;
exports.PedidoProductoModule = PedidoProductoModule = __decorate([
    (0, common_1.Module)({
        controllers: [pedido_producto_controller_1.PedidoProductoController],
        providers: [pedido_producto_service_1.PedidoProductoService, prisma_service_1.PrismaService],
    })
], PedidoProductoModule);
//# sourceMappingURL=pedido_producto.module.js.map