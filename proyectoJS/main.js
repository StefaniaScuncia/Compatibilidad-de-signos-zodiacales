
let signoUsuario = prompt("Ingresa tu signo del zodiaco (en minúsculas):");

for (;;) {
  signoUsuario = prompt("Ingresa tu signo del zodiaco (en minúsculas):");
  if (!isNaN(signoUsuario)) {
    alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
  } else {
    break; // Salimos del bucle si la entrada es válida (no es un número)
  }
}

let signoPareja = prompt("Ingresa el signo del zodiaco de tu pareja (en minúsculas):");

// Pedimos al usuario que ingrese el signo del zodiaco de su pareja (en minúsculas) hasta que sea válido
for (;;) {
  signoPareja = prompt("Ingresa el signo del zodiaco de tu pareja (en minúsculas):");
  if (!isNaN(signoPareja)) {
    alert("Por favor, ingresa solo letras, sin números ni caracteres especiales.");
  } else {
    break; // Salimos del bucle si la entrada es válida (no es un número)
  }
}

// Utilizamos un switch para determinar si los signos son compatibles
switch (signoUsuario) {
  case "aries":
    switch (signoPareja) {
      case "aries":
      case "leo":
      case "sagitario":
        alert("Son compatibles.");
        break;
      default:
        alert("No son compatibles.");
    }
    break;

  case "tauro":
    switch (signoPareja) {
      case "tauro":
      case "virgo":
      case "capricornio":
        alert("Son compatibles.");
        break;
      default:
        alert("No son compatibles.");
    }
    break;

    case "geminis":
    switch (signoPareja) {
      case "acuario":
      case "virgo":
      case "capricornio":
        alert("Son compatibles.");
        break;
      default:
        alert("No son compatibles.");
    }
    break;

    case "acuario":
    switch (signoPareja) {
      case "geminis":
      case "virgo":
      case "capricornio":
        alert ("Son compatibles.");
        break;
      default:
        alert("No son compatibles.");
    }
    break;
  // Agrega más casos para otros signos del zodiaco según sea necesario
  default:
    alert("Signo del zodiaco no reconocido.");
}
