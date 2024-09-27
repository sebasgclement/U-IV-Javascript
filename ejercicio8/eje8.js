class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
  
  class Factura {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotalSinImpuestos() {
      return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    }
  
    calcularTotalConImpuestos() {
      const totalSinImpuestos = this.calcularTotalSinImpuestos();
      const impuesto = totalSinImpuestos * 0.15;
      return Math.round(totalSinImpuestos + impuesto);
    }
  }
  
  const producto1 = new Producto('Televisor', 1000, 2);
  const producto2 = new Producto('Celular', 500, 3);
  
  const factura = new Factura();
  factura.agregarProducto(producto1);
  factura.agregarProducto(producto2);
  
  console.log(`Total sin impuestos: ${factura.calcularTotalSinImpuestos()}`);
  console.log(`Total con impuestos: ${factura.calcularTotalConImpuestos()}`);
  