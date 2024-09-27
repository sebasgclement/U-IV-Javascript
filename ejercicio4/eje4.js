class Triangulo {
    constructor(lado1, lado2, lado3) {
      this.lado1 = lado1;
      this.lado2 = lado2;
      this.lado3 = lado3;
    }
  
    calcularArea() {
      const semiPerimetro = (this.lado1 + this.lado2 + this.lado3) / 2;
      return Math.sqrt(semiPerimetro * (semiPerimetro - this.lado1) * (semiPerimetro - this.lado2) * (semiPerimetro - this.lado3));
    }
  }
  
  const triangulo1 = new Triangulo(3, 4, 5);
  console.log(`Área del triángulo: ${triangulo1.calcularArea()}`);
  