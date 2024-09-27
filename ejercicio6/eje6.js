class Tarea {
    constructor(descripcion, fechaLimite) {
      this.descripcion = descripcion;
      this.fechaLimite = fechaLimite;
      this.completada = false;
    }
  
    marcarCompletada() {
      this.completada = true;
    }
  
    estaAtrasada() {
      const fechaActual = new Date();
      return !this.completada && fechaActual > this.fechaLimite;
    }
  }
  
  const tarea1 = new Tarea('Terminar el reporte', new Date(2024, 8, 5));
  const tarea2 = new Tarea('Hacer ejercicio', new Date(2024, 9, 10));
  
  console.log(tarea1.estaAtrasada());
  tarea1.marcarCompletada();
  console.log(tarea1.estaAtrasada());
  