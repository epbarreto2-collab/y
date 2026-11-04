import { PrismaService } from '../prisma/prisma.service';
export declare class ProductosService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    crear(data: {
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
