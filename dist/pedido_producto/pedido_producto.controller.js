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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoProductoController = void 0;
const common_1 = require("@nestjs/common");
const pedido_producto_service_1 = require("./pedido_producto.service");
const create_pedido_producto_dto_1 = require("./dto/create-pedido_producto.dto");
const update_pedido_producto_dto_1 = require("./dto/update-pedido_producto.dto");
let PedidoProductoController = class PedidoProductoController {
    pedidoProductoService;
    constructor(pedidoProductoService) {
        this.pedidoProductoService = pedidoProductoService;
    }
    create(createPedidoProductoDto) {
        return this.pedidoProductoService.create(createPedidoProductoDto);
    }
    findAll() {
        return this.pedidoProductoService.findAll();
    }
    findOne(id) {
        return this.pedidoProductoService.findOne(+id);
    }
    update(id, updatePedidoProductoDto) {
        return this.pedidoProductoService.update(+id, updatePedidoProductoDto);
    }
    remove(id) {
        return this.pedidoProductoService.remove(+id);
    }
};
exports.PedidoProductoController = PedidoProductoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pedido_producto_dto_1.CreatePedidoProductoDto]),
    __metadata("design:returntype", void 0)
], PedidoProductoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PedidoProductoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedidoProductoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pedido_producto_dto_1.UpdatePedidoProductoDto]),
    __metadata("design:returntype", void 0)
], PedidoProductoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PedidoProductoController.prototype, "remove", null);
exports.PedidoProductoController = PedidoProductoController = __decorate([
    (0, common_1.Controller)('pedido-producto'),
    __metadata("design:paramtypes", [pedido_producto_service_1.PedidoProductoService])
], PedidoProductoController);
//# sourceMappingURL=pedido_producto.controller.js.map