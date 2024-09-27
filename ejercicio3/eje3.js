class Circulo {
    constructor(radio) {
      this.radio = radio;
    }
  
    calcularArea() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  
    calcularPerimetro() {
      return 2 * Math.PI * this.radio;
    }
  }
  
  const circulo1 = new Circulo(10);
  console.log(`Área del círculo: ${circulo1.calcularArea()}`);
  console.log(`Perímetro del círculo: ${circulo1.calcularPerimetro()}`);
  