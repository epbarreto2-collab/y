-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido_producto" (
    "id" SERIAL NOT NULL,
    "idpedido" INTEGER NOT NULL,
    "idproducto" INTEGER NOT NULL,

    CONSTRAINT "pedido_producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" SERIAL NOT NULL,
    "estado" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE UNIQUE INDEX "producto_id_key" ON "producto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_producto_id_key" ON "pedido_producto"("id");

-- CreateIndex
CREATE UNIQUE INDEX "pedido_id_key" ON "pedido"("id");

-- AddForeignKey
ALTER TABLE "pedido_producto" ADD CONSTRAINT "pedido_producto_idpedido_fkey" FOREIGN KEY ("idpedido") REFERENCES "pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pedido_producto" ADD CONSTRAINT "pedido_producto_idproducto_fkey" FOREIGN KEY ("idproducto") REFERENCES "producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
