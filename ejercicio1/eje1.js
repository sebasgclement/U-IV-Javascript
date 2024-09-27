class Libro {
    constructor(titulo, autor, precio, cantidadEnStock) {
      this.titulo = titulo;
      this.autor = autor;
      this.precio = precio;
      this.cantidadEnStock = cantidadEnStock;
    }
  
    calcularTotalEnStock() {
      return this.precio * this.cantidadEnStock;
    }
  }
  
  const libro1 = new Libro('JavaScript: La guía definitiva', 'David Flanagan', 50, 10);
  const libro2 = new Libro('Eloquent JavaScript', 'Marijn Haverbeke', 40, 5);
  
  console.log(libro1.calcularTotalEnStock());
  console.log(libro2.calcularTotalEnStock());
  