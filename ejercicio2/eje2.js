function diferenciaDias(fecha1, fecha2) {
    const unDia = 1000 * 60 * 60 * 24;
    const diferenciaTiempo = Math.abs(fecha2.getTime() - fecha1.getTime());
    return Math.floor(diferenciaTiempo / unDia);
  }
  
  const fechaActual = new Date();
  const fechaInicioProyecto = new Date(2023, 10, 30);
  
  console.log(`Días desde el inicio del proyecto: ${diferenciaDias(fechaInicioProyecto, fechaActual)}`);
  