"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePedidoProductoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pedido_producto_dto_1 = require("./create-pedido_producto.dto");
class UpdatePedidoProductoDto extends (0, mapped_types_1.PartialType)(create_pedido_producto_dto_1.CreatePedidoProductoDto) {
}
exports.UpdatePedidoProductoDto = UpdatePedidoProductoDto;
//# sourceMappingURL=update-pedido_producto.dto.js.map