import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pedidoModel = runtime.Types.Result.DefaultSelection<Prisma.$pedidoPayload>;
export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type PedidoAvgAggregateOutputType = {
    id: number | null;
    cantidad: number | null;
};
export type PedidoSumAggregateOutputType = {
    id: number | null;
    cantidad: number | null;
};
export type PedidoMinAggregateOutputType = {
    id: number | null;
    estado: string | null;
    cantidad: number | null;
};
export type PedidoMaxAggregateOutputType = {
    id: number | null;
    estado: string | null;
    cantidad: number | null;
};
export type PedidoCountAggregateOutputType = {
    id: number;
    estado: number;
    cantidad: number;
    _all: number;
};
export type PedidoAvgAggregateInputType = {
    id?: true;
    cantidad?: true;
};
export type PedidoSumAggregateInputType = {
    id?: true;
    cantidad?: true;
};
export type PedidoMinAggregateInputType = {
    id?: true;
    estado?: true;
    cantidad?: true;
};
export type PedidoMaxAggregateInputType = {
    id?: true;
    estado?: true;
    cantidad?: true;
};
export type PedidoCountAggregateInputType = {
    id?: true;
    estado?: true;
    cantidad?: true;
    _all?: true;
};
export type PedidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    cursor?: Prisma.pedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PedidoCountAggregateInputType;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
    [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePedido[P]> : Prisma.GetScalarType<T[P], AggregatePedido[P]>;
};
export type pedidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithAggregationInput | Prisma.pedidoOrderByWithAggregationInput[];
    by: Prisma.PedidoScalarFieldEnum[] | Prisma.PedidoScalarFieldEnum;
    having?: Prisma.pedidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PedidoCountAggregateInputType | true;
    _avg?: PedidoAvgAggregateInputType;
    _sum?: PedidoSumAggregateInputType;
    _min?: PedidoMinAggregateInputType;
    _max?: PedidoMaxAggregateInputType;
};
export type PedidoGroupByOutputType = {
    id: number;
    estado: string;
    cantidad: number;
    _count: PedidoCountAggregateOutputType | null;
    _avg: PedidoAvgAggregateOutputType | null;
    _sum: PedidoSumAggregateOutputType | null;
    _min: PedidoMinAggregateOutputType | null;
    _max: PedidoMaxAggregateOutputType | null;
};
export type GetPedidoGroupByPayload<T extends pedidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PedidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PedidoGroupByOutputType[P]>;
}>>;
export type pedidoWhereInput = {
    AND?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    OR?: Prisma.pedidoWhereInput[];
    NOT?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    id?: Prisma.IntFilter<"pedido"> | number;
    estado?: Prisma.StringFilter<"pedido"> | string;
    cantidad?: Prisma.IntFilter<"pedido"> | number;
    producto?: Prisma.Pedido_productoListRelationFilter;
};
export type pedidoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    producto?: Prisma.pedido_productoOrderByRelationAggregateInput;
};
export type pedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    OR?: Prisma.pedidoWhereInput[];
    NOT?: Prisma.pedidoWhereInput | Prisma.pedidoWhereInput[];
    estado?: Prisma.StringFilter<"pedido"> | string;
    cantidad?: Prisma.IntFilter<"pedido"> | number;
    producto?: Prisma.Pedido_productoListRelationFilter;
}, "id" | "id">;
export type pedidoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    _count?: Prisma.pedidoCountOrderByAggregateInput;
    _avg?: Prisma.pedidoAvgOrderByAggregateInput;
    _max?: Prisma.pedidoMaxOrderByAggregateInput;
    _min?: Prisma.pedidoMinOrderByAggregateInput;
    _sum?: Prisma.pedidoSumOrderByAggregateInput;
};
export type pedidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.pedidoScalarWhereWithAggregatesInput | Prisma.pedidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.pedidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pedidoScalarWhereWithAggregatesInput | Prisma.pedidoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"pedido"> | number;
    estado?: Prisma.StringWithAggregatesFilter<"pedido"> | string;
    cantidad?: Prisma.IntWithAggregatesFilter<"pedido"> | number;
};
export type pedidoCreateInput = {
    estado: string;
    cantidad: number;
    producto?: Prisma.pedido_productoCreateNestedManyWithoutPedidoInput;
};
export type pedidoUncheckedCreateInput = {
    id?: number;
    estado: string;
    cantidad: number;
    producto?: Prisma.pedido_productoUncheckedCreateNestedManyWithoutPedidoInput;
};
export type pedidoUpdateInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    producto?: Prisma.pedido_productoUpdateManyWithoutPedidoNestedInput;
};
export type pedidoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    producto?: Prisma.pedido_productoUncheckedUpdateManyWithoutPedidoNestedInput;
};
export type pedidoCreateManyInput = {
    id?: number;
    estado: string;
    cantidad: number;
};
export type pedidoUpdateManyMutationInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedidoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PedidoScalarRelationFilter = {
    is?: Prisma.pedidoWhereInput;
    isNot?: Prisma.pedidoWhereInput;
};
export type pedidoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedidoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedidoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedidoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedidoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type pedidoCreateNestedOneWithoutProductoInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutProductoInput, Prisma.pedidoUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutProductoInput;
    connect?: Prisma.pedidoWhereUniqueInput;
};
export type pedidoUpdateOneRequiredWithoutProductoNestedInput = {
    create?: Prisma.XOR<Prisma.pedidoCreateWithoutProductoInput, Prisma.pedidoUncheckedCreateWithoutProductoInput>;
    connectOrCreate?: Prisma.pedidoCreateOrConnectWithoutProductoInput;
    upsert?: Prisma.pedidoUpsertWithoutProductoInput;
    connect?: Prisma.pedidoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pedidoUpdateToOneWithWhereWithoutProductoInput, Prisma.pedidoUpdateWithoutProductoInput>, Prisma.pedidoUncheckedUpdateWithoutProductoInput>;
};
export type pedidoCreateWithoutProductoInput = {
    estado: string;
    cantidad: number;
};
export type pedidoUncheckedCreateWithoutProductoInput = {
    id?: number;
    estado: string;
    cantidad: number;
};
export type pedidoCreateOrConnectWithoutProductoInput = {
    where: Prisma.pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutProductoInput, Prisma.pedidoUncheckedCreateWithoutProductoInput>;
};
export type pedidoUpsertWithoutProductoInput = {
    update: Prisma.XOR<Prisma.pedidoUpdateWithoutProductoInput, Prisma.pedidoUncheckedUpdateWithoutProductoInput>;
    create: Prisma.XOR<Prisma.pedidoCreateWithoutProductoInput, Prisma.pedidoUncheckedCreateWithoutProductoInput>;
    where?: Prisma.pedidoWhereInput;
};
export type pedidoUpdateToOneWithWhereWithoutProductoInput = {
    where?: Prisma.pedidoWhereInput;
    data: Prisma.XOR<Prisma.pedidoUpdateWithoutProductoInput, Prisma.pedidoUncheckedUpdateWithoutProductoInput>;
};
export type pedidoUpdateWithoutProductoInput = {
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type pedidoUncheckedUpdateWithoutProductoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type PedidoCountOutputType = {
    producto: number;
};
export type PedidoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | PedidoCountOutputTypeCountProductoArgs;
};
export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PedidoCountOutputTypeSelect<ExtArgs> | null;
};
export type PedidoCountOutputTypeCountProductoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedido_productoWhereInput;
};
export type pedidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estado?: boolean;
    cantidad?: boolean;
    producto?: boolean | Prisma.pedido$productoArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estado?: boolean;
    cantidad?: boolean;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    estado?: boolean;
    cantidad?: boolean;
}, ExtArgs["result"]["pedido"]>;
export type pedidoSelectScalar = {
    id?: boolean;
    estado?: boolean;
    cantidad?: boolean;
};
export type pedidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "estado" | "cantidad", ExtArgs["result"]["pedido"]>;
export type pedidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    producto?: boolean | Prisma.pedido$productoArgs<ExtArgs>;
    _count?: boolean | Prisma.PedidoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type pedidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type pedidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $pedidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pedido";
    objects: {
        producto: Prisma.$pedido_productoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        estado: string;
        cantidad: number;
    }, ExtArgs["result"]["pedido"]>;
    composites: {};
};
export type pedidoGetPayload<S extends boolean | null | undefined | pedidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pedidoPayload, S>;
export type pedidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PedidoCountAggregateInputType | true;
};
export interface pedidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pedido'];
        meta: {
            name: 'pedido';
        };
    };
    findUnique<T extends pedidoFindUniqueArgs>(args: Prisma.SelectSubset<T, pedidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pedidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pedidoFindFirstArgs>(args?: Prisma.SelectSubset<T, pedidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pedidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pedidoFindManyArgs>(args?: Prisma.SelectSubset<T, pedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pedidoCreateArgs>(args: Prisma.SelectSubset<T, pedidoCreateArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pedidoCreateManyArgs>(args?: Prisma.SelectSubset<T, pedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pedidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pedidoDeleteArgs>(args: Prisma.SelectSubset<T, pedidoDeleteArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pedidoUpdateArgs>(args: Prisma.SelectSubset<T, pedidoUpdateArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pedidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, pedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pedidoUpdateManyArgs>(args: Prisma.SelectSubset<T, pedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pedidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pedidoUpsertArgs>(args: Prisma.SelectSubset<T, pedidoUpsertArgs<ExtArgs>>): Prisma.Prisma__pedidoClient<runtime.Types.Result.GetResult<Prisma.$pedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pedidoCountArgs>(args?: Prisma.Subset<T, pedidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PedidoCountAggregateOutputType> : number>;
    aggregate<T extends PedidoAggregateArgs>(args: Prisma.Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>;
    groupBy<T extends pedidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pedidoGroupByArgs['orderBy'];
    } : {
        orderBy?: pedidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pedidoFieldRefs;
}
export interface Prisma__pedidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    producto<T extends Prisma.pedido$productoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pedido$productoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pedido_productoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pedidoFieldRefs {
    readonly id: Prisma.FieldRef<"pedido", 'Int'>;
    readonly estado: Prisma.FieldRef<"pedido", 'String'>;
    readonly cantidad: Prisma.FieldRef<"pedido", 'Int'>;
}
export type pedidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where: Prisma.pedidoWhereUniqueInput;
};
export type pedidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where: Prisma.pedidoWhereUniqueInput;
};
export type pedidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    cursor?: Prisma.pedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
export type pedidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    cursor?: Prisma.pedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
export type pedidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where?: Prisma.pedidoWhereInput;
    orderBy?: Prisma.pedidoOrderByWithRelationInput | Prisma.pedidoOrderByWithRelationInput[];
    cursor?: Prisma.pedidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PedidoScalarFieldEnum | Prisma.PedidoScalarFieldEnum[];
};
export type pedidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedidoCreateInput, Prisma.pedidoUncheckedCreateInput>;
};
export type pedidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pedidoCreateManyInput | Prisma.pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pedidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    data: Prisma.pedidoCreateManyInput | Prisma.pedidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pedidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedidoUpdateInput, Prisma.pedidoUncheckedUpdateInput>;
    where: Prisma.pedidoWhereUniqueInput;
};
export type pedidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pedidoUpdateManyMutationInput, Prisma.pedidoUncheckedUpdateManyInput>;
    where?: Prisma.pedidoWhereInput;
    limit?: number;
};
export type pedidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pedidoUpdateManyMutationInput, Prisma.pedidoUncheckedUpdateManyInput>;
    where?: Prisma.pedidoWhereInput;
    limit?: number;
};
export type pedidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where: Prisma.pedidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pedidoCreateInput, Prisma.pedidoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pedidoUpdateInput, Prisma.pedidoUncheckedUpdateInput>;
};
export type pedidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
    where: Prisma.pedidoWhereUniqueInput;
};
export type pedidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pedidoWhereInput;
    limit?: number;
};
export type pedido$productoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type pedidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pedidoSelect<ExtArgs> | null;
    omit?: Prisma.pedidoOmit<ExtArgs> | null;
    include?: Prisma.pedidoInclude<ExtArgs> | null;
};
