
class SignosCompatibles {
    findCompatibilidad(signoBuscado) {
        const compatibilidadEncontrada = Object.entries(this.compatibilidades).find(([signo, compatibles]) => {
            return signo === signoBuscado;
        });

        if (compatibilidadEncontrada) {
            const [signo, compatibles] = compatibilidadEncontrada;
            return compatibles;
        }

        return [];
    }
    cargarDatosDesdeJSON() {
        return new Promise((resolve, reject) => {
            fetch('./datos/datos.json') 
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('No se pudo cargar el archivo JSON');
                    }
                    return response.json();
                })
                .then((data) => {
                    this.compatibilidades = data.compatibilidades;
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    constructor() {
        this.compatibilidades = {
            capricornio: ["tauro", "virgo", "escorpio"],
            leo: ["libra", "sagitario", "aries"],
            cancer: ["virgo", "escorpio", "tauro"],
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
    }

    saludoUsuario(nombre, nombrePareja) {
        const mensaje = `Bienvenido/a ${nombre}, continuemos para ver si vos y ${nombrePareja} son compatibles`;
        document.getElementById("mensajeCompatibilidad").textContent = mensaje;
        document.getElementById("mensajeCompatibilidad").style.display = "flex";
    }

    obtenerSignoPorFecha(fecha) {
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

    verificarCompatibilidad(signoUsuario, signoPareja) {
        return this.compatibilidades[signoUsuario]?.includes(signoPareja) || false;
    }

    validarFecha(fecha) {
        const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!fechaRegex.test(fecha)) {
            return false;
        }

        const fechaNacimiento = new Date(fecha);
        return !isNaN(fechaNacimiento.getDate());
    }
}

const signosCompatibles = new SignosCompatibles();

function mostrarMensajeSaludo() {
    const nombre = document.getElementById("nombre").value;
    const nombrePareja = document.getElementById("nombrePareja").value;
    const errorNombres = document.getElementById("errorNombres");

    if (nombre.trim() === "" || nombrePareja.trim() === "") {
        Swal.fire({
            title: 'Por favor, ingresa tu nombre y el nombre de tu pareja.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        return;
    }

    document.getElementById("datosNombres").style.display = "none";
    document.getElementById("mensajeSaludo").style.display = "flex";
    document.getElementById("btnSiguienteSaludo").style.display = "flex";

    signosCompatibles.saludoUsuario(nombre, nombrePareja);
}


function mostrarFormularioFechas() {
    document.getElementById("mensajeCompatibilidad").style.display = "none";
    document.getElementById("btnSiguienteSaludo").style.display = "none";
    document.getElementById("datosFechas").style.display = "flex";
}


const mensajeNombres = document.getElementById("mensaje");

const mensajeElement = document.getElementById("mensaje");
function calcularCompatibilidad() {
    const nombre = document.getElementById("nombre").value;
    const nombrePareja = document.getElementById("nombrePareja").value;

    const fechaUsuarioInput = document.getElementById("fecha");
    const fechaParejaInput = document.getElementById("fechaPareja");

    const fechaUsuario = fechaUsuarioInput.value;
    const fechaPareja = fechaParejaInput.value;


    if (!nombre || !nombrePareja || !fechaUsuario || !fechaPareja) {
        Swal.fire({
            title: 'Por favor, completa todos los campos.',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        return;
    }

    if (!signosCompatibles.validarFecha(fechaUsuario) || !signosCompatibles.validarFecha(fechaPareja)) {
        return;
    }

    const signoUsuario = signosCompatibles.obtenerSignoPorFecha(fechaUsuario);
    const signoPareja = signosCompatibles.obtenerSignoPorFecha(fechaPareja);

    const compatiblesUsuario = signosCompatibles.findCompatibilidad(signoUsuario);
    const compatiblesPareja = signosCompatibles.findCompatibilidad(signoPareja);

    let mensajeCompatibilidad;
    if (signosCompatibles.verificarCompatibilidad(signoUsuario, signoPareja)) {
        mensajeCompatibilidad = `¡Felicidades, ${nombre}, vos y ${nombrePareja} son compatibles! Los signos ${signoUsuario} y ${signoPareja} tienen un alto nivel de compatibilidad.`;
    } else {
        mensajeCompatibilidad = `${nombre}, lamentamos informarte que vos y ${nombrePareja} no son compatibles. Los signos de ${signoUsuario} y ${signoPareja} no son compatibles.`;

        if (compatiblesUsuario.length > 0) {
            mensajeCompatibilidad += `\nTus compatibles son: ${compatiblesUsuario.join(", ")}`;
        }

        if (compatiblesPareja.length > 0) {
            mensajeCompatibilidad += `\nCompatibles de ${nombrePareja} son: ${compatiblesPareja.join(", ")}`;
        }
    }

    document.getElementById("mensajeCompatibilidad").textContent = mensajeCompatibilidad;
    datosFechas.style.display = "none";
    document.getElementById("mensajeCompatibilidad").style.display = "flex";
    guardarDatosEnLocalStorage(nombre, nombrePareja, fechaUsuario, fechaPareja);
}

function guardarDatosEnLocalStorage(nombre, nombrePareja, fechaUsuario, fechaPareja) {
    const datos = {
        nombre: nombre,
        nombrePareja: nombrePareja,
        fechaUsuario: fechaUsuario,
        fechaPareja: fechaPareja
    };
    localStorage.setItem('datosCompatibilidad', JSON.stringify(datos));
}

function obtenerDatosDelLocalStorage() {
    const datos = JSON.parse(localStorage.getItem('datosCompatibilidad'));
    return datos;
}
