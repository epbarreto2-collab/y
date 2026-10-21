import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type productoModel = runtime.Types.Result.DefaultSelection<Prisma.$productoPayload>;
export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type ProductoAvgAggregateOutputType = {
    id: number | null;
    precio: number | null;
};
export type ProductoSumAggregateOutputType = {
    id: number | null;
    precio: number | null;
};
export type ProductoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProductoCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    precio: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProductoAvgAggregateInputType = {
    id?: true;
    precio?: true;
};
export type ProductoSumAggregateInputType = {
    id?: true;
    precio?: true;
};
export type ProductoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProductoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProductoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productoWhereInput;
    orderBy?: Prisma.productoOrderByWithRelationInput | Prisma.productoOrderByWithRelationInput[];
    cursor?: Prisma.productoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProductoCountAggregateInputType;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
    [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProducto[P]> : Prisma.GetScalarType<T[P], AggregateProducto[P]>;
};
export type productoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productoWhereInput;
    orderBy?: Prisma.productoOrderByWithAggregationInput | Prisma.productoOrderByWithAggregationInput[];
    by: Prisma.ProductoScalarFieldEnum[] | Prisma.ProductoScalarFieldEnum;
    having?: Prisma.productoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductoCountAggregateInputType | true;
    _avg?: ProductoAvgAggregateInputType;
    _sum?: ProductoSumAggregateInputType;
    _min?: ProductoMinAggregateInputType;
    _max?: ProductoMaxAggregateInputType;
};
export type ProductoGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductoCountAggregateOutputType | null;
    _avg: ProductoAvgAggregateOutputType | null;
    _sum: ProductoSumAggregateOutputType | null;
    _min: ProductoMinAggregateOutputType | null;
    _max: ProductoMaxAggregateOutputType | null;
};
export type GetProductoGroupByPayload<T extends productoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductoGroupByOutputType[P]>;
}>>;
export type productoWhereInput = {
    AND?: Prisma.productoWhereInput | Prisma.productoWhereInput[];
    OR?: Prisma.productoWhereInput[];
    NOT?: Prisma.productoWhereInput | Prisma.productoWhereInput[];
    id?: Prisma.IntFilter<"producto"> | number;
    nombre?: Prisma.StringFilter<"producto"> | string;
    descripcion?: Prisma.StringFilter<"producto"> | string;
    precio?: Prisma.FloatFilter<"producto"> | number;
    createdAt?: Prisma.DateTimeFilter<"producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"producto"> | Date | string;
    pedido?: Prisma.Pedido_productoListRelationFilter;
};
export type productoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    pedido?: Prisma.pedido_productoOrderByRelationAggregateInput;
};
export type productoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.productoWhereInput | Prisma.productoWhereInput[];
    OR?: Prisma.productoWhereInput[];
    NOT?: Prisma.productoWhereInput | Prisma.productoWhereInput[];
    nombre?: Prisma.StringFilter<"producto"> | string;
    descripcion?: Prisma.StringFilter<"producto"> | string;
    precio?: Prisma.FloatFilter<"producto"> | number;
    createdAt?: Prisma.DateTimeFilter<"producto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"producto"> | Date | string;
    pedido?: Prisma.Pedido_productoListRelationFilter;
}, "id" | "id">;
export type productoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.productoCountOrderByAggregateInput;
    _avg?: Prisma.productoAvgOrderByAggregateInput;
    _max?: Prisma.productoMaxOrderByAggregateInput;
    _min?: Prisma.productoMinOrderByAggregateInput;
    _sum?: Prisma.productoSumOrderByAggregateInput;
};
export type productoScalarWhereWithAggregatesInput = {
    AND?: Prisma.productoScalarWhereWithAggregatesInput | Prisma.productoScalarWhereWithAggregatesInput[];
    OR?: Prisma.productoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.productoScalarWhereWithAggregatesInput | Prisma.productoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"producto"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"producto"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"producto"> | string;
    precio?: Prisma.FloatWithAggregatesFilter<"producto"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"producto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"producto"> | Date | string;
};
export type productoCreateInput = {
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedido?: Prisma.pedido_productoCreateNestedManyWithoutProductoInput;
};
export type productoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pedido?: Prisma.pedido_productoUncheckedCreateNestedManyWithoutProductoInput;
};
export type productoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedido?: Prisma.pedido_productoUpdateManyWithoutProductoNestedInput;
};
export type productoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pedido?: Prisma.pedido_productoUncheckedUpdateManyWithoutProductoNestedInput;
};
export type productoCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
};
export type productoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type productoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
};
export type ProductoScalarRelationFilter = {
    is?: Prisma.productoWhereInput;
    isNot?: Prisma.productoWhereInput;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type productoCreateNestedOneWithoutPedidoInput = {
    create?: Prisma.XOR<Prisma.productoCreateWithoutPedidoInput, Prisma.productoUncheckedCreateWithoutPedidoInput>;
    connectOrCreate?: Prisma.productoCreateOrConnectWithoutPedidoInput;
    connect?: Prisma.productoWhereUniqueInput;
};
export type productoUpdateOneRequiredWithoutPedidoNestedInput = {
    create?: Prisma.XOR<Prisma.productoCreateWithoutPedidoInput, Prisma.productoUncheckedCreateWithoutPedidoInput>;
    connectOrCreate?: Prisma.productoCreateOrConnectWithoutPedidoInput;
    upsert?: Prisma.productoUpsertWithoutPedidoInput;
    connect?: Prisma.productoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.productoUpdateToOneWithWhereWithoutPedidoInput, Prisma.productoUpdateWithoutPedidoInput>, Prisma.productoUncheckedUpdateWithoutPedidoInput>;
};
export type productoCreateWithoutPedidoInput = {
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productoUncheckedCreateWithoutPedidoInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type productoCreateOrConnectWithoutPedidoInput = {
    where: Prisma.productoWhereUniqueInput;
    create: Prisma.XOR<Prisma.productoCreateWithoutPedidoInput, Prisma.productoUncheckedCreateWithoutPedidoInput>;
};
export type productoUpsertWithoutPedidoInput = {
    update: Prisma.XOR<Prisma.productoUpdateWithoutPedidoInput, Prisma.productoUncheckedUpdateWithoutPedidoInput>;
    create: Prisma.XOR<Prisma.productoCreateWithoutPedidoInput, Prisma.productoUncheckedCreateWithoutPedidoInput>;
    where?: Prisma.productoWhereInput;
};
export type productoUpdateToOneWithWhereWithoutPedidoInput = {
    where?: Prisma.productoWhereInput;
    data: Prisma.XOR<Prisma.productoUpdateWithoutPedidoInput, Prisma.productoUncheckedUpdateWithoutPedidoInput>;
};
export type productoUpdateWithoutPedidoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type productoUncheckedUpdateWithoutPedidoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductoCountOutputType = {
    pedido: number;
};
export type ProductoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | ProductoCountOutputTypeCountPedidoArgs;
};
export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProductoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProductoCountOutputTypeCountPedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_productoWhereInput;
};
export type productoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    pedido?: boolean | Prisma.producto$pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["producto"]>;
export type productoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type productoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["producto"]>;
export type productoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type productoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "createdAt" | "updatedAt", ExtArgs["result"]["producto"]>;
export type productoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pedido?: boolean | Prisma.producto$pedidoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type productoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type productoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $productoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "producto";
    objects: {
        pedido: Prisma.$pedido_productoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["producto"]>;
    composites: {};
};
export type productoGetPayload<S extends boolean | null | undefined | productoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$productoPayload, S>;
export type productoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<productoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductoCountAggregateInputType | true;
};
export interface productoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['producto'];
        meta: {
            name: 'producto';
        };
    };
    findUnique<T extends productoFindUniqueArgs>(args: Prisma.SelectSubset<T, productoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends productoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, productoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends productoFindFirstArgs>(args?: Prisma.SelectSubset<T, productoFindFirstArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends productoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, productoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends productoFindManyArgs>(args?: Prisma.SelectSubset<T, productoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends productoCreateArgs>(args: Prisma.SelectSubset<T, productoCreateArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends productoCreateManyArgs>(args?: Prisma.SelectSubset<T, productoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends productoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, productoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends productoDeleteArgs>(args: Prisma.SelectSubset<T, productoDeleteArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends productoUpdateArgs>(args: Prisma.SelectSubset<T, productoUpdateArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends productoDeleteManyArgs>(args?: Prisma.SelectSubset<T, productoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends productoUpdateManyArgs>(args: Prisma.SelectSubset<T, productoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends productoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, productoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends productoUpsertArgs>(args: Prisma.SelectSubset<T, productoUpsertArgs<ExtArgs>>): Prisma.Prisma__productoClient<runtime.Types.Result.GetResult<Prisma.$productoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends productoCountArgs>(args?: Prisma.Subset<T, productoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductoCountAggregateOutputType> : number>;
    aggregate<T extends ProductoAggregateArgs>(args: Prisma.Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>;
    groupBy<T extends productoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: productoGroupByArgs['orderBy'];
    } : {
        orderBy?: productoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, productoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: productoFieldRefs;
}
export interface Prisma__productoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pedido<T extends Prisma.producto$pedidoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.producto$pedidoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface productoFieldRefs {
    readonly id: Prisma.FieldRef<"producto", 'Int'>;
    readonly nombre: Prisma.FieldRef<"producto", 'String'>;
    readonly descripcion: Prisma.FieldRef<"producto", 'String'>;
    readonly precio: Prisma.FieldRef<"producto", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"producto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"producto", 'DateTime'>;
}
export type productoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where: Prisma.productoWhereUniqueInput;
};
export type productoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where: Prisma.productoWhereUniqueInput;
};
export type productoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where?: Prisma.productoWhereInput;
    orderBy?: Prisma.productoOrderByWithRelationInput | Prisma.productoOrderByWithRelationInput[];
    cursor?: Prisma.productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type productoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where?: Prisma.productoWhereInput;
    orderBy?: Prisma.productoOrderByWithRelationInput | Prisma.productoOrderByWithRelationInput[];
    cursor?: Prisma.productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type productoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where?: Prisma.productoWhereInput;
    orderBy?: Prisma.productoOrderByWithRelationInput | Prisma.productoOrderByWithRelationInput[];
    cursor?: Prisma.productoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductoScalarFieldEnum | Prisma.ProductoScalarFieldEnum[];
};
export type productoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productoCreateInput, Prisma.productoUncheckedCreateInput>;
};
export type productoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.productoCreateManyInput | Prisma.productoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    data: Prisma.productoCreateManyInput | Prisma.productoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type productoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productoUpdateInput, Prisma.productoUncheckedUpdateInput>;
    where: Prisma.productoWhereUniqueInput;
};
export type productoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.productoUpdateManyMutationInput, Prisma.productoUncheckedUpdateManyInput>;
    where?: Prisma.productoWhereInput;
    limit?: number;
};
export type productoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.productoUpdateManyMutationInput, Prisma.productoUncheckedUpdateManyInput>;
    where?: Prisma.productoWhereInput;
    limit?: number;
};
export type productoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where: Prisma.productoWhereUniqueInput;
    create: Prisma.XOR<Prisma.productoCreateInput, Prisma.productoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.productoUpdateInput, Prisma.productoUncheckedUpdateInput>;
};
export type productoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
    where: Prisma.productoWhereUniqueInput;
};
export type productoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.productoWhereInput;
    limit?: number;
};
export type producto$pedidoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type productoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.productoSelect<ExtArgs> | null;
    omit?: Prisma.productoOmit<ExtArgs> | null;
    include?: Prisma.productoInclude<ExtArgs> | null;
};
