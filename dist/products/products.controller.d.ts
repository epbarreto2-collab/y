import { ProductosService } from './products.service';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    crear(body: {
        nombre: string;
        descripcion: string;
        stock: number;
    }): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        stock: number;
    }>;
    listar(): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        stock: number;
    }[]>;
    buscarPorId(id: number): Promise<{
        id: number;
        nombre: string;
        descripcion: string;
        stock: number;
    }>;
}
