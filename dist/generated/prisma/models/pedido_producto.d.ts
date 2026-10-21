import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pedido_productoModel = runtime.Types.Result.DefaultSelection<Prisma.$pedido_productoPayload>;
export type AggregatePedido_producto = {
    _count: Pedido_productoCountAggregateOutputType | null;
    _avg: Pedido_productoAvgAggregateOutputType | null;
    _sum: Pedido_productoSumAggregateOutputType | null;
    _min: Pedido_productoMinAggregateOutputType | null;
    _max: Pedido_productoMaxAggregateOutputType | null;
};
export type Pedido_productoAvgAggregateOutputType = {
    id: number | null;
    idpedido: number | null;
    idproducto: number | null;
};
export type Pedido_productoSumAggregateOutputType = {
    id: number | null;
    idpedido: number | null;
    idproducto: number | null;
};
export type Pedido_productoMinAggregateOutputType = {
    id: number | null;
    idpedido: number | null;
    idproducto: number | null;
};
export type Pedido_productoMaxAggregateOutputType = {
    id: number | null;
    idpedido: number | null;
    idproducto: number | null;
};
export type Pedido_productoCountAggregateOutputType = {
    id: number;
    idpedido: number;
    idproducto: number;
    _all: number;
};
export type Pedido_productoAvgAggregateInputType = {
    id?: true;
    idpedido?: true;
    idproducto?: true;
};
export type Pedido_productoSumAggregateInputType = {
    id?: true;
    idpedido?: true;
    idproducto?: true;
};
export type Pedido_productoMinAggregateInputType = {
    id?: true;
    idpedido?: true;
    idproducto?: true;
};
export type Pedido_productoMaxAggregateInputType = {
    id?: true;
    idpedido?: true;
    idproducto?: true;
};
export type Pedido_productoCountAggregateInputType = {
    id?: true;
    idpedido?: true;
    idproducto?: true;
    _all?: true;
};
export type Pedido_productoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_productoWhereInput;
    orderBy?: Prisma.pedido_productoOrderByWithRelationInput | Prisma.pedido_productoOrderByWithRelationInput[];
    cursor?: Prisma.pedido_productoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Pedido_productoCountAggregateInputType;
    _avg?: Pedido_productoAvgAggregateInputType;
    _sum?: Pedido_productoSumAggregateInputType;
    _min?: Pedido_productoMinAggregateInputType;
    _max?: Pedido_productoMaxAggregateInputType;
};
export type GetPedido_productoAggregateType<T extends Pedido_productoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido_producto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido_producto[P]> : Prisma.GetScalarType<T[P], AggregatePedido_producto[P]>;
};
export type pedido_productoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_productoWhereInput;
    orderBy?: Prisma.pedido_productoOrderByWithAggregationInput | Prisma.pedido_productoOrderByWithAggregationInput[];
    by: Prisma.Pedido_productoScalarFieldEnum[] | Prisma.Pedido_productoScalarFieldEnum;
    having?: Prisma.pedido_productoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Pedido_productoCountAggregateInputType | true;
    _avg?: Pedido_productoAvgAggregateInputType;
    _sum?: Pedido_productoSumAggregateInputType;
    _min?: Pedido_productoMinAggregateInputType;
    _max?: Pedido_productoMaxAggregateInputType;
};
export type Pedido_productoGroupByOutputType = {
    id: number;
    idpedido: number;
    idproducto: number;
    _count: Pedido_productoCountAggregateOutputType | null;
    _avg: Pedido_productoAvgAggregateOutputType | null;
    _sum: Pedido_productoSumAggregateOutputType | null;
    _min: Pedido_productoMinAggregateOutputType | null;
    _max: Pedido_productoMaxAggregateOutputType | null;
};
export type GetPedido_productoGroupByPayload<T extends pedido_productoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Pedido_productoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Pedido_productoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Pedido_productoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Pedido_productoGroupByOutputType[P]>;
}>>;
export type pedido_productoWhereInput = {
    AND?: Prisma.pedido_productoWhereInput | Prisma.pedido_productoWhereInput[];
    OR?: Prisma.pedido_productoWhereInput[];
    NOT?: Prisma.pedido_productoWhereInput | Prisma.pedido_productoWhereInput[];
    id?: Prisma.IntFilter<"pedido_producto"> | number;
    idpedido?: Prisma.IntFilter<"pedido_producto"> | number;
    idproducto?: Prisma.IntFilter<"pedido_producto"> | number;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.pedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.productoWhereInput>;
};
export type pedido_productoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
    pedido?: Prisma.pedidoOrderByWithRelationInput;
    producto?: Prisma.productoOrderByWithRelationInput;
};
export type pedido_productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.pedido_productoWhereInput | Prisma.pedido_productoWhereInput[];
    OR?: Prisma.pedido_productoWhereInput[];
    NOT?: Prisma.pedido_productoWhereInput | Prisma.pedido_productoWhereInput[];
    idpedido?: Prisma.IntFilter<"pedido_producto"> | number;
    idproducto?: Prisma.IntFilter<"pedido_producto"> | number;
    pedido?: Prisma.XOR<Prisma.PedidoScalarRelationFilter, Prisma.pedidoWhereInput>;
    producto?: Prisma.XOR<Prisma.ProductoScalarRelationFilter, Prisma.productoWhereInput>;
}, "id" | "id">;
export type pedido_productoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
    _count?: Prisma.pedido_productoCountOrderByAggregateInput;
    _avg?: Prisma.pedido_productoAvgOrderByAggregateInput;
    _max?: Prisma.pedido_productoMaxOrderByAggregateInput;
    _min?: Prisma.pedido_productoMinOrderByAggregateInput;
    _sum?: Prisma.pedido_productoSumOrderByAggregateInput;
};
export type pedido_productoScalarWhereWithAggregatesInput = {
    AND?: Prisma.pedido_productoScalarWhereWithAggregatesInput | Prisma.pedido_productoScalarWhereWithAggregatesInput[];
    OR?: Prisma.pedido_productoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pedido_productoScalarWhereWithAggregatesInput | Prisma.pedido_productoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"pedido_producto"> | number;
    idpedido?: Prisma.IntWithAggregatesFilter<"pedido_producto"> | number;
    idproducto?: Prisma.IntWithAggregatesFilter<"pedido_producto"> | number;
};
export type pedido_productoCreateInput = {
    pedido: Prisma.pedidoCreateNestedOneWithoutProductoInput;
    producto: Prisma.productoCreateNestedOneWithoutPedidoInput;
};
export type pedido_productoUncheckedCreateInput = {
    id?: number;
    idpedido: number;
    idproducto: number;
};
export type pedido_productoUpdateInput = {
    pedido?: Prisma.pedidoUpdateOneRequiredWithoutProductoNestedInput;
    producto?: Prisma.productoUpdateOneRequiredWithoutPedidoNestedInput;
};
export type pedido_productoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idpedido?: Prisma.IntFieldUpdateOperationsInput | number;
    idproducto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedido_productoCreateManyInput = {
    id?: number;
    idpedido: number;
    idproducto: number;
};
export type pedido_productoUpdateManyMutationInput = {};
export type pedido_productoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idpedido?: Prisma.IntFieldUpdateOperationsInput | number;
    idproducto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Pedido_productoListRelationFilter = {
    every?: Prisma.pedido_productoWhereInput;
    some?: Prisma.pedido_productoWhereInput;
    none?: Prisma.pedido_productoWhereInput;
};
export type pedido_productoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pedido_productoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
};
export type pedido_productoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
};
export type pedido_productoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
};
export type pedido_productoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
};
export type pedido_productoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    idpedido?: Prisma.SortOrder;
    idproducto?: Prisma.SortOrder;
};
export type pedido_productoCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput> | Prisma.pedido_productoCreateWithoutProductoInput[] | Prisma.pedido_productoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutProductoInput | Prisma.pedido_productoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.pedido_productoCreateManyProductoInputEnvelope;
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
};
export type pedido_productoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput> | Prisma.pedido_productoCreateWithoutProductoInput[] | Prisma.pedido_productoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutProductoInput | Prisma.pedido_productoCreateOrConnectWithoutProductoInput[];
    createMany?: Prisma.pedido_productoCreateManyProductoInputEnvelope;
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
};
export type pedido_productoUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput> | Prisma.pedido_productoCreateWithoutProductoInput[] | Prisma.pedido_productoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutProductoInput | Prisma.pedido_productoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.pedido_productoUpsertWithWhereUniqueWithoutProductoInput | Prisma.pedido_productoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.pedido_productoCreateManyProductoInputEnvelope;
    set?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    disconnect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    delete?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    update?: Prisma.pedido_productoUpdateWithWhereUniqueWithoutProductoInput | Prisma.pedido_productoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.pedido_productoUpdateManyWithWhereWithoutProductoInput | Prisma.pedido_productoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
};
export type pedido_productoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput> | Prisma.pedido_productoCreateWithoutProductoInput[] | Prisma.pedido_productoUncheckedCreateWithoutProductoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutProductoInput | Prisma.pedido_productoCreateOrConnectWithoutProductoInput[];
    upsert?: Prisma.pedido_productoUpsertWithWhereUniqueWithoutProductoInput | Prisma.pedido_productoUpsertWithWhereUniqueWithoutProductoInput[];
    createMany?: Prisma.pedido_productoCreateManyProductoInputEnvelope;
    set?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    disconnect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    delete?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    update?: Prisma.pedido_productoUpdateWithWhereUniqueWithoutProductoInput | Prisma.pedido_productoUpdateWithWhereUniqueWithoutProductoInput[];
    updateMany?: Prisma.pedido_productoUpdateManyWithWhereWithoutProductoInput | Prisma.pedido_productoUpdateManyWithWhereWithoutProductoInput[];
    deleteMany?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
};
export type pedido_productoCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput> | Prisma.pedido_productoCreateWithoutPedidoInput[] | Prisma.pedido_productoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutPedidoInput | Prisma.pedido_productoCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.pedido_productoCreateManyPedidoInputEnvelope;
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
};
export type pedido_productoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput> | Prisma.pedido_productoCreateWithoutPedidoInput[] | Prisma.pedido_productoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutPedidoInput | Prisma.pedido_productoCreateOrConnectWithoutPedidoInput[];
    createMany?: Prisma.pedido_productoCreateManyPedidoInputEnvelope;
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
};
export type pedido_productoUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput> | Prisma.pedido_productoCreateWithoutPedidoInput[] | Prisma.pedido_productoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutPedidoInput | Prisma.pedido_productoCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.pedido_productoUpsertWithWhereUniqueWithoutPedidoInput | Prisma.pedido_productoUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.pedido_productoCreateManyPedidoInputEnvelope;
    set?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    disconnect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    delete?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    update?: Prisma.pedido_productoUpdateWithWhereUniqueWithoutPedidoInput | Prisma.pedido_productoUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.pedido_productoUpdateManyWithWhereWithoutPedidoInput | Prisma.pedido_productoUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
};
export type pedido_productoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput> | Prisma.pedido_productoCreateWithoutPedidoInput[] | Prisma.pedido_productoUncheckedCreateWithoutPedidoInput[];
    connectOrCreate?: Prisma.pedido_productoCreateOrConnectWithoutPedidoInput | Prisma.pedido_productoCreateOrConnectWithoutPedidoInput[];
    upsert?: Prisma.pedido_productoUpsertWithWhereUniqueWithoutPedidoInput | Prisma.pedido_productoUpsertWithWhereUniqueWithoutPedidoInput[];
    createMany?: Prisma.pedido_productoCreateManyPedidoInputEnvelope;
    set?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    disconnect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    delete?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    connect?: Prisma.pedido_productoWhereUniqueInput | Prisma.pedido_productoWhereUniqueInput[];
    update?: Prisma.pedido_productoUpdateWithWhereUniqueWithoutPedidoInput | Prisma.pedido_productoUpdateWithWhereUniqueWithoutPedidoInput[];
    updateMany?: Prisma.pedido_productoUpdateManyWithWhereWithoutPedidoInput | Prisma.pedido_productoUpdateManyWithWhereWithoutPedidoInput[];
    deleteMany?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
};
export type pedido_productoCreateWithoutProductoInput = {
    pedido: Prisma.pedidoCreateNestedOneWithoutProductoInput;
};
export type pedido_productoUncheckedCreateWithoutProductoInput = {
    id?: number;
    idpedido: number;
};
export type pedido_productoCreateOrConnectWithoutProductoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput>;
};
export type pedido_productoCreateManyProductoInputEnvelope = {
    data: Prisma.pedido_productoCreateManyProductoInput | Prisma.pedido_productoCreateManyProductoInput[];
    skipDuplicates?: boolean;
};
export type pedido_productoUpsertWithWhereUniqueWithoutProductoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pedido_productoUpdateWithoutProductoInput, Prisma.pedido_productoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.pedido_productoCreateWithoutProductoInput, Prisma.pedido_productoUncheckedCreateWithoutProductoInput>;
};
export type pedido_productoUpdateWithWhereUniqueWithoutProductoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pedido_productoUpdateWithoutProductoInput, Prisma.pedido_productoUncheckedUpdateWithoutProductoInput>;
};
export type pedido_productoUpdateManyWithWhereWithoutProductoInput = {
    where: Prisma.pedido_productoScalarWhereInput;
    data: Prisma.XOR<Prisma.pedido_productoUpdateManyMutationInput, Prisma.pedido_productoUncheckedUpdateManyWithoutProductoInput>;
};
export type pedido_productoScalarWhereInput = {
    AND?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
    OR?: Prisma.pedido_productoScalarWhereInput[];
    NOT?: Prisma.pedido_productoScalarWhereInput | Prisma.pedido_productoScalarWhereInput[];
    id?: Prisma.IntFilter<"pedido_producto"> | number;
    idpedido?: Prisma.IntFilter<"pedido_producto"> | number;
    idproducto?: Prisma.IntFilter<"pedido_producto"> | number;
};
export type pedido_productoCreateWithoutPedidoInput = {
    producto: Prisma.productoCreateNestedOneWithoutPedidoInput;
};
export type pedido_productoUncheckedCreateWithoutPedidoInput = {
    id?: number;
    idproducto: number;
};
export type pedido_productoCreateOrConnectWithoutPedidoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput>;
};
export type pedido_productoCreateManyPedidoInputEnvelope = {
    data: Prisma.pedido_productoCreateManyPedidoInput | Prisma.pedido_productoCreateManyPedidoInput[];
    skipDuplicates?: boolean;
};
export type pedido_productoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pedido_productoUpdateWithoutPedidoInput, Prisma.pedido_productoUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.pedido_productoCreateWithoutPedidoInput, Prisma.pedido_productoUncheckedCreateWithoutPedidoInput>;
};
export type pedido_productoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: Prisma.pedido_productoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pedido_productoUpdateWithoutPedidoInput, Prisma.pedido_productoUncheckedUpdateWithoutPedidoInput>;
};
export type pedido_productoUpdateManyWithWhereWithoutPedidoInput = {
    where: Prisma.pedido_productoScalarWhereInput;
    data: Prisma.XOR<Prisma.pedido_productoUpdateManyMutationInput, Prisma.pedido_productoUncheckedUpdateManyWithoutPedidoInput>;
};
export type pedido_productoCreateManyProductoInput = {
    id?: number;
    idpedido: number;
};
export type pedido_productoUpdateWithoutProductoInput = {
    pedido?: Prisma.pedidoUpdateOneRequiredWithoutProductoNestedInput;
};
export type pedido_productoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idpedido?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedido_productoUncheckedUpdateManyWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idpedido?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedido_productoCreateManyPedidoInput = {
    id?: number;
    idproducto: number;
};
export type pedido_productoUpdateWithoutPedidoInput = {
    producto?: Prisma.productoUpdateOneRequiredWithoutPedidoNestedInput;
};
export type pedido_productoUncheckedUpdateWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idproducto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedido_productoUncheckedUpdateManyWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    idproducto?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedido_productoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idpedido?: boolean;
    idproducto?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_producto"]>;
export type pedido_productoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idpedido?: boolean;
    idproducto?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_producto"]>;
export type pedido_productoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    idpedido?: boolean;
    idproducto?: boolean;
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido_producto"]>;
export type pedido_productoSelectScalar = {
    id?: boolean;
    idpedido?: boolean;
    idproducto?: boolean;
};
export type pedido_productoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "idpedido" | "idproducto", ExtArgs["result"]["pedido_producto"]>;
export type pedido_productoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
};
export type pedido_productoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
};
export type pedido_productoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.pedidoDefaultArgs<ExtArgs>;
    producto?: boolean | Prisma.productoDefaultArgs<ExtArgs>;
};
export type $pedido_productoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pedido_producto";
    objects: {
        pedido: Prisma.$pedidoPayload<ExtArgs>;
        producto: Prisma.$productoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        idpedido: number;
        idproducto: number;
    }, ExtArgs["result"]["pedido_producto"]>;
    composites: {};
};
export type pedido_productoGetPayload<S extends boolean | null | undefined | pedido_productoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload, S>;
export type pedido_productoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pedido_productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Pedido_productoCountAggregateInputType | true;
};
export interface pedido_productoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pedido_producto'];
        meta: {
            name: 'pedido_producto';
        };
    };
    findUnique<T extends pedido_productoFindUniqueArgs>(args: Prisma.SelectSubset<T, pedido_productoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pedido_productoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pedido_productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pedido_productoFindFirstArgs>(args?: Prisma.SelectSubset<T, pedido_productoFindFirstArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pedido_productoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pedido_productoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pedido_productoFindManyArgs>(args?: Prisma.SelectSubset<T, pedido_productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pedido_productoCreateArgs>(args: Prisma.SelectSubset<T, pedido_productoCreateArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pedido_productoCreateManyArgs>(args?: Prisma.SelectSubset<T, pedido_productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pedido_productoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pedido_productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pedido_productoDeleteArgs>(args: Prisma.SelectSubset<T, pedido_productoDeleteArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pedido_productoUpdateArgs>(args: Prisma.SelectSubset<T, pedido_productoUpdateArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pedido_productoDeleteManyArgs>(args?: Prisma.SelectSubset<T, pedido_productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pedido_productoUpdateManyArgs>(args: Prisma.SelectSubset<T, pedido_productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pedido_productoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pedido_productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pedido_productoUpsertArgs>(args: Prisma.SelectSubset<T, pedido_productoUpsertArgs<ExtArgs>>): Prisma.Prisma__pedido_productoClient<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pedido_productoCountArgs>(args?: Prisma.Subset<T, pedido_productoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Pedido_productoCountAggregateOutputType> : number>;
    aggregate<T extends Pedido_productoAggregateArgs>(args: Prisma.Subset<T, Pedido_productoAggregateArgs>): Prisma.PrismaPromise<GetPedido_productoAggregateType<T>>;
    groupBy<T extends pedido_productoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pedido_productoGroupByArgs['orderBy'];
    } : {
        orderBy?: pedido_productoGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pedido_productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedido_productoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pedido_productoFieldRefs;
}
export interface Prisma__pedido_productoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.pedidoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pedidoDefaultArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    producto<T extends Prisma.productoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.productoDefaultArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pedido_productoFieldRefs {
    readonly id: Prisma.FieldRef<"pedido_producto", 'Int'>;
    readonly idpedido: Prisma.FieldRef<"pedido_producto", 'Int'>;
    readonly idproducto: Prisma.FieldRef<"pedido_producto", 'Int'>;
}
export type pedido_productoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where: Prisma.pedido_productoWhereUniqueInput;
};
export type pedido_productoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where: Prisma.pedido_productoWhereUniqueInput;
};
export type pedido_productoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where?: Prisma.pedido_productoWhereInput;
    orderBy?: Prisma.pedido_productoOrderByWithRelationInput | Prisma.pedido_productoOrderByWithRelationInput[];
    cursor?: Prisma.pedido_productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pedido_productoScalarFieldEnum | Prisma.Pedido_productoScalarFieldEnum[];
};
export type pedido_productoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where?: Prisma.pedido_productoWhereInput;
    orderBy?: Prisma.pedido_productoOrderByWithRelationInput | Prisma.pedido_productoOrderByWithRelationInput[];
    cursor?: Prisma.pedido_productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pedido_productoScalarFieldEnum | Prisma.Pedido_productoScalarFieldEnum[];
};
export type pedido_productoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where?: Prisma.pedido_productoWhereInput;
    orderBy?: Prisma.pedido_productoOrderByWithRelationInput | Prisma.pedido_productoOrderByWithRelationInput[];
    cursor?: Prisma.pedido_productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Pedido_productoScalarFieldEnum | Prisma.Pedido_productoScalarFieldEnum[];
};
export type pedido_productoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedido_productoCreateInput, Prisma.pedido_productoUncheckedCreateInput>;
};
export type pedido_productoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pedido_productoCreateManyInput | Prisma.pedido_productoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pedido_productoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    data: Prisma.pedido_productoCreateManyInput | Prisma.pedido_productoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.pedido_productoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type pedido_productoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedido_productoUpdateInput, Prisma.pedido_productoUncheckedUpdateInput>;
    where: Prisma.pedido_productoWhereUniqueInput;
};
export type pedido_productoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pedido_productoUpdateManyMutationInput, Prisma.pedido_productoUncheckedUpdateManyInput>;
    where?: Prisma.pedido_productoWhereInput;
    limit?: number;
};
export type pedido_productoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedido_productoUpdateManyMutationInput, Prisma.pedido_productoUncheckedUpdateManyInput>;
    where?: Prisma.pedido_productoWhereInput;
    limit?: number;
    include?: Prisma.pedido_productoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type pedido_productoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where: Prisma.pedido_productoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedido_productoCreateInput, Prisma.pedido_productoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pedido_productoUpdateInput, Prisma.pedido_productoUncheckedUpdateInput>;
};
export type pedido_productoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
    where: Prisma.pedido_productoWhereUniqueInput;
};
export type pedido_productoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_productoWhereInput;
    limit?: number;
};
export type pedido_productoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedido_productoSelect<ExtArgs> | null;
    omit?: Prisma.pedido_productoOmit<ExtArgs> | null;
    include?: Prisma.pedido_productoInclude<ExtArgs> | null;
};
