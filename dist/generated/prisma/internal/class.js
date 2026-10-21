"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.9.1",
    "engineVersion": "e922089b7d7502aff4249d5da3420f6fa55fc6ad",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider     = \"prisma-client\"\n  output       = \"../src/generated/prisma\"\n  moduleFormat = \"cjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel Usuario {\n  id       Int    @id @default(autoincrement())\n  nombre   String\n  correo   String @unique\n  password String\n}\n\nmodel producto {\n  id          Int      @id @unique @default(autoincrement())\n  nombre      String\n  descripcion String\n  precio      Float\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n\n  pedido pedido_producto[]\n}\n\nmodel pedido_producto {\n  id         Int @id @unique @default(autoincrement())\n  idpedido   Int\n  idproducto Int\n\n  pedido   pedido   @relation(fields: [idpedido], references: [id])\n  producto producto @relation(fields: [idproducto], references: [id])\n}\n\nmodel pedido {\n  id       Int               @id @unique @default(autoincrement())\n  estado   String\n  cantidad Int\n  producto pedido_producto[]\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"Usuario\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"correo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"producto\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"nombre\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"descripcion\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"precio\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"pedido\",\"kind\":\"object\",\"type\":\"pedido_producto\",\"relationName\":\"pedido_productoToproducto\"}],\"dbName\":null},\"pedido_producto\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"idpedido\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"idproducto\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"pedido\",\"kind\":\"object\",\"type\":\"pedido\",\"relationName\":\"pedidoTopedido_producto\"},{\"name\":\"producto\",\"kind\":\"object\",\"type\":\"producto\",\"relationName\":\"pedido_productoToproducto\"}],\"dbName\":null},\"pedido\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"estado\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cantidad\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"producto\",\"kind\":\"object\",\"type\":\"pedido_producto\",\"relationName\":\"pedidoTopedido_producto\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"Usuario.findUnique\",\"Usuario.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"Usuario.findFirst\",\"Usuario.findFirstOrThrow\",\"Usuario.findMany\",\"data\",\"Usuario.createOne\",\"Usuario.createMany\",\"Usuario.createManyAndReturn\",\"Usuario.updateOne\",\"Usuario.updateMany\",\"Usuario.updateManyAndReturn\",\"create\",\"update\",\"Usuario.upsertOne\",\"Usuario.deleteOne\",\"Usuario.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"Usuario.groupBy\",\"Usuario.aggregate\",\"producto\",\"pedido\",\"producto.findUnique\",\"producto.findUniqueOrThrow\",\"producto.findFirst\",\"producto.findFirstOrThrow\",\"producto.findMany\",\"producto.createOne\",\"producto.createMany\",\"producto.createManyAndReturn\",\"producto.updateOne\",\"producto.updateMany\",\"producto.updateManyAndReturn\",\"producto.upsertOne\",\"producto.deleteOne\",\"producto.deleteMany\",\"producto.groupBy\",\"producto.aggregate\",\"pedido_producto.findUnique\",\"pedido_producto.findUniqueOrThrow\",\"pedido_producto.findFirst\",\"pedido_producto.findFirstOrThrow\",\"pedido_producto.findMany\",\"pedido_producto.createOne\",\"pedido_producto.createMany\",\"pedido_producto.createManyAndReturn\",\"pedido_producto.updateOne\",\"pedido_producto.updateMany\",\"pedido_producto.updateManyAndReturn\",\"pedido_producto.upsertOne\",\"pedido_producto.deleteOne\",\"pedido_producto.deleteMany\",\"pedido_producto.groupBy\",\"pedido_producto.aggregate\",\"pedido.findUnique\",\"pedido.findUniqueOrThrow\",\"pedido.findFirst\",\"pedido.findFirstOrThrow\",\"pedido.findMany\",\"pedido.createOne\",\"pedido.createMany\",\"pedido.createManyAndReturn\",\"pedido.updateOne\",\"pedido.updateMany\",\"pedido.updateManyAndReturn\",\"pedido.upsertOne\",\"pedido.deleteOne\",\"pedido.deleteMany\",\"pedido.groupBy\",\"pedido.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"estado\",\"cantidad\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"contains\",\"startsWith\",\"endsWith\",\"not\",\"every\",\"some\",\"none\",\"idpedido\",\"idproducto\",\"nombre\",\"descripcion\",\"precio\",\"createdAt\",\"updatedAt\",\"correo\",\"password\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "xwErQAdOAACDAQAwTwAABAAQUAAAgwEAMFECAAAAAWQBAHMAIWkBAAAAAWoBAHMAIQEAAAABACABAAAAAQAgB04AAIMBADBPAAAEABBQAACDAQAwUQIAcgAhZAEAcwAhaQEAcwAhagEAcwAhAAMAAAAEACADAAAFADAEAAABACADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIARRAgAAAAFkAQAAAAFpAQAAAAFqAQAAAAEBCAAACQAgBFECAAAAAWQBAAAAAWkBAAAAAWoBAAAAAQEIAAALADABCAAACwAwBFECAIoBACFkAQCJAQAhaQEAiQEAIWoBAIkBACECAAAAAQAgCAAADgAgBFECAIoBACFkAQCJAQAhaQEAiQEAIWoBAIkBACECAAAABAAgCAAAEAAgAgAAAAQAIAgAABAAIAMAAAABACAPAAAJACAQAAAOACABAAAAAQAgAQAAAAQAIAUVAAC3AQAgFgAAuAEAIBcAALsBACAYAAC6AQAgGQAAuQEAIAdOAACCAQAwTwAAFwAQUAAAggEAMFECAGoAIWQBAGsAIWkBAGsAIWoBAGsAIQMAAAAEACADAAAWADAUAAAXACADAAAABAAgAwAABQAwBAAAAQAgCh0AAHQAIE4AAHwAME8AACQAEFAAAHwAMFECAAAAAWQBAHMAIWUBAHMAIWYIAH0AIWdAAH4AIWhAAH4AIQEAAAAaACAIHAAAgQEAIB0AAIABACBOAAB_ADBPAAAcABBQAAB_ADBRAgByACFiAgByACFjAgByACECHAAAtgEAIB0AALUBACAIHAAAgQEAIB0AAIABACBOAAB_ADBPAAAcABBQAAB_ADBRAgAAAAFiAgByACFjAgByACEDAAAAHAAgAwAAHQAwBAAAHgAgAwAAABwAIAMAAB0AMAQAAB4AIAEAAAAcACABAAAAHAAgAQAAABoAIAodAAB0ACBOAAB8ADBPAAAkABBQAAB8ADBRAgByACFkAQBzACFlAQBzACFmCAB9ACFnQAB-ACFoQAB-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-ACFoQAB-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"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.js"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.js");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map