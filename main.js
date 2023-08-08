function saludoUsuario(nombre, nombrePareja) {
  alert("Bienvenido/a " + nombre + ", continuemos para ver si vos y " + nombrePareja + " son compatibles" );
}

let ingreso = prompt("Ingresa tu nombre")
let ingreso2= prompt ("Ingresa el nombre de tu pareja")

saludoUsuario(ingreso, ingreso2)

for (;;) {
  signoUsuario = prompt("Ingresa tu signo del zodiaco (en minúsculas):");
  if (!isNaN(signoUsuario)) {
    alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
  } else {
    break;
  }
}


for (;;) {
  signoPareja = prompt("Ingresa el signo del zodiaco de " + ingreso2 + " (en minúsculas):");
  if (!isNaN(signoPareja)) {
    alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
  } else {
    break;
  }
}

function verificarCompatibilidad(signoUsuario, signoPareja) {
  switch (signoUsuario) {
    case "capricornio":
      switch (signoPareja) {
        case "tauro":
        case "virgo":
        case "escorpio":
          return true;
        default:
          return false;
      }
    case "leo":
      switch (signoPareja) {
        case "libra":
        case "sagitario":
        case "aries":
          return true;
        default:
          return false;
      }
    case "cáncer":
      switch (signoPareja) {
        case "virgo":
        case "escorpio":
        case "tauro":
          return true;
        default:
          return false;
      }
    case "aries":
      switch (signoPareja) {
        case "géminis":
        case "acuario":
        case "leo":
        case "tauro":
          return true;
        default:
          return false;
      }
    case "libra":
      switch (signoPareja) {
        case "leo":
        case "sagitario":
          return true;
        default:
          return false;
      }
    case "piscis":
      switch (signoPareja) {
        case "géminis":
        case "sagitario":
        case "leo":
          return true;
        default:
          return false;
      }
    case "tauro":
      switch (signoPareja) {
        case "capricornio":
        case "piscis":
        case "virgo":
          return true;
        default:
          return false;
      }
    case "virgo":
      switch (signoPareja) {
        case "cáncer":
        case "tauro":
        case "capricornio":
          return true;
        default:
          return false;
      }
    case "géminis":
      switch (signoPareja) {
        case "acuario":
        case "libra":
          return true;
        default:
          return false;
      }
    case "acuario":
      switch (signoPareja) {
        case "cáncer":
        case "tauro":
          return true;
        default:
          return false;
      }
    case "escorpio":
      switch (signoPareja) {
        case "cáncer":
        case "piscis":
        case "capricornio":
          return true;
        default:
          return false;
      }
    case "sagitario":
      switch (signoPareja) {
        case "acuario":
        case "libra":
          return true;
        default:
          return false;
      }
    default:
      return false;
  }
}

// Ejemplo de uso:
if (verificarCompatibilidad(signoUsuario, signoPareja)) {
  alert("¡Felicidades, " + ingreso + ", vos y " + ingreso2 + " son compatibles!");
} else {
  alert(ingreso + ", lamentamos informarte que vos y " + ingreso2 + " no son compatibles.");
}

function mensaje (mensaje){
  alert (mensaje)
}