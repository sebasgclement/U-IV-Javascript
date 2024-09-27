class GeneradorAleatorio {
    generarNumeroAleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    generarListaNumerosAleatorios(min, max, cantidad) {
      const lista = [];
      for (let i = 0; i < cantidad; i++) {
        lista.push(this.generarNumeroAleatorio(min, max));
      }
      return lista;
    }
  }
  
  const generador = new GeneradorAleatorio();
  console.log(generador.generarNumeroAleatorio(1, 100));
  console.log(generador.generarListaNumerosAleatorios(10, 50, 5));
  