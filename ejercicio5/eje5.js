class Producto {
    constructor(nombre, precio, cantidad) {
      this.nombre = nombre;
      this.precio = precio;
      this.cantidad = cantidad;
    }
  }
  
  class Inventario {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    eliminarProducto(nombre) {
      this.productos = this.productos.filter(producto => producto.nombre !== nombre);
    }
  
    calcularValorTotal() {
      return this.productos.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    }
  }
  
  const inventario = new Inventario();
  const producto1 = new Producto('Laptop', 1000, 5);
  const producto2 = new Producto('Mouse', 50, 10);
  
  inventario.agregarProducto(producto1);
  inventario.agregarProducto(producto2);
  
  console.log(`Valor total del inventario: ${inventario.calcularValorTotal()}`);
  