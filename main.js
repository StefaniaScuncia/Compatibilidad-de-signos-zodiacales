window.onload = () => {
  LoadData();
};

const LoadData = () => {
  function saludoUsuario(nombre, nombrePareja) {
    alert(`Bienvenido/a ${nombre}, continuemos para ver si vos y ${nombrePareja} son compatibles`);
  }

  function obtenerSignoPorFecha(fecha) {
    const fechaNacimiento = new Date(fecha);
    const mes = fechaNacimiento.getMonth() + 1;
    const dia = fechaNacimiento.getDate();

    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "geminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "cancer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 23)) return "leo";
    if ((mes === 8 && dia >= 24) || (mes === 9 && dia <= 22)) return "virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 23)) return "libra";
    if ((mes === 10 && dia >= 24) || (mes === 11 && dia <= 22)) return "escorpio";
    if ((mes === 11 && dia >= 23) || (mes === 12 && dia <= 21)) return "sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) return "capricornio";
    if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)) return "acuario";
    if ((mes === 2 && dia >= 20) || (mes === 3 && dia <= 20)) return "piscis";

    return "";
  }

  function obtenerFechaValida(mensaje) {
    let fecha;
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/; 
  
    while (true) {
      fecha = prompt(mensaje);
  
      if (!fechaRegex.test(fecha)) {
        alert("Fecha no válida. Por favor, ingresa una fecha en el formato correcto (YYYY-MM-DD).");
        continue;
      }
  
      const fechaNacimiento = new Date(fecha);
      
      if (!isNaN(fechaNacimiento.getDate())) {
        break; 
      } else {
        alert("Fecha no válida. Por favor, ingresa una fecha válida.");
      }
    }
    return fecha;
  }
  
  let ingreso = prompt("Ingresa tu nombre");
  let ingreso2 = prompt("Ingresa el nombre de tu pareja");
  saludoUsuario(ingreso, ingreso2);
  
  let fechaUsuario = obtenerFechaValida("Ingresa tu fecha de nacimiento (YYYY-MM-DD):");
  let fechaPareja = obtenerFechaValida(`Ingresa la fecha de nacimiento de ${ingreso2} (YYYY-MM-DD):`);
  
  let signoUsuario = obtenerSignoPorFecha(fechaUsuario);
  let signoPareja = obtenerSignoPorFecha(fechaPareja);
  
  function verificarCompatibilidad(signoUsuario, signoPareja) {
    const compatibilidades = {
      capricornio: ["tauro", "virgo", "escorpio"],
      leo: ["libra", "sagitario", "aries"],
      cancer: ["virgo", "acuario", "tauro"],
      aries: ["geminis", "acuario", "leo", "tauro"],
      libra: ["leo", "sagitario"],
      piscis: ["geminis", "sagitario", "leo"],
      tauro: ["capricornio", "piscis", "virgo"],
      virgo: ["cancer", "tauro", "capricornio"],
      geminis: ["acuario", "libra"],
      acuario: ["cancer", "geminis"],
      escorpio: ["cancer", "piscis", "capricornio"],
      sagitario: ["acuario", "libra"],
    };

    return compatibilidades[signoUsuario]?.includes(signoPareja) || false;
  }

  let mensajeCompatibilidad;
  if (verificarCompatibilidad(signoUsuario, signoPareja)) {
    mensajeCompatibilidad = `¡Felicidades, ${ingreso}, vos y ${ingreso2} son compatibles! Los signos (${signoUsuario}) y (${signoPareja}) tienen un alto nivel de compatibilidad.`;
  } else {
    mensajeCompatibilidad = `${ingreso}, lamentamos informarte que vos y ${ingreso2} no son compatibles. Los signos de (${signoUsuario}) y (${signoPareja}) no son compatibles.`;
  }

  alert(mensajeCompatibilidad);
};
