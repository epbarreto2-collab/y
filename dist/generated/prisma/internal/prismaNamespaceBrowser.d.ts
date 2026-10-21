import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Usuario: "Usuario";
    readonly producto: "producto";
    readonly pedido_producto: "pedido_producto";
    readonly pedido: "pedido";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly correo: "correo";
    readonly password: "password";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const ProductoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly precio: "precio";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum];
export declare const Pedido_productoScalarFieldEnum: {
    readonly id: "id";
    readonly idpedido: "idpedido";
    readonly idproducto: "idproducto";
};
export type Pedido_productoScalarFieldEnum = (typeof Pedido_productoScalarFieldEnum)[keyof typeof Pedido_productoScalarFieldEnum];
export declare const PedidoScalarFieldEnum: {
    readonly id: "id";
    readonly estado: "estado";
    readonly cantidad: "cantidad";
};
export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
