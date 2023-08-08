window.onload = () => {
  LoadData()
}

const LoadData = () => {
  function saludoUsuario(nombre, nombrePareja) {
    alert("Bienvenido/a " + nombre + ", continuemos para ver si vos y " + nombrePareja + " son compatibles");
  }

  let ingreso = prompt("Ingresa tu nombre");
  let ingreso2 = prompt("Ingresa el nombre de tu pareja");
  saludoUsuario(ingreso, ingreso2);

  function contieneSoloLetras(cadena) {
    return /^[a-zA-Z]+$/.test(cadena);
  }

  /*for (; ;) {
    signoUsuario = prompt("Ingresa tu signo del zodiaco (en minúsculas):");
    if (contieneSoloLetras(signoUsuario)) {
      break;
    } else {
      alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
    }
  }


  for (; ;) {
    signoPareja = prompt("Ingresa el signo del zodiaco de " + ingreso2 + " (en minúsculas):");
    if (contieneSoloLetras(signoPareja)) {
      break;
    } else {
      alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
    }
  }*/
  
  let signoUsuario;
  while (true) {
    signoUsuario = prompt("Ingresa tu signo del zodiaco (en minúsculas):");
    if (contieneSoloLetras(signoUsuario)) {
      const signosValidos = ["aries", "geminis", "tauro", "cancer", "libra", "virgo", "capricornio", "escorpio", "sagitario", "acuario", "piscis", "leo"];
      if (signosValidos.includes(signoUsuario)) {
        break;
      } else {
        alert("Signo no reconocido. Por favor, ingresa un signo válido.");
      }
    } else {
      alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
    }
  }

  let signoPareja;
  while (true) {
    signoPareja = prompt("Ingresa el signo del zodiaco de " + ingreso2 + " (en minúsculas):");
    if (contieneSoloLetras(signoPareja)) {
      const signosValidos = ["aries", "geminis", "tauro", "cancer", "libra", "virgo", "capricornio", "escorpio", "sagitario", "acuario", "piscis", "leo"];
      if (signosValidos.includes(signoPareja)) {
        break;
      } else {
        alert("Signo no reconocido. Por favor, ingresa un signo válido.");
      }
    } else {
      alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
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
      case "cancer":
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
          case "geminis":
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
          case "geminis":
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
          case "cancer":
          case "tauro":
          case "capricornio":
            return true;
          default:
            return false;
        }
      case "geminis":
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
          case "geminis":
            return true;
          default:
            return false;
        }
      case "escorpio":
        switch (signoPareja) {
          case "cancer":
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
  
  if (verificarCompatibilidad(signoUsuario, signoPareja)) {
    alert("¡Felicidades, " + ingreso + ", vos y " + ingreso2 + " son compatibles!");
  } else {
    alert(ingreso + ", lamentamos informarte que vos y " + ingreso2 + " no son compatibles.");
  }

}