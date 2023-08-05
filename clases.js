
//CLASE 1: VARIABLES Y CONSTANTES
//NO SE USA MAS VAR
var nombre; 
nombre= "stefi";

//VARIABLES
//SE USA LET 
//Desclaracion (let) y asignación (edad=23) en la misma linea

//let edad= 23; //valor numérico
let nombre = "stefi";
let apellido = "scuncia"; 
let numero= 23; 
//reasignacion de valores (valor en cadena)
edad= "veintitres";
//edad es el nombre de la variable, 23 el valor que almacena


//CONSTANTES(su valor no se puede modificar, es constante)
const PI= 3.141516; 

//CONCATENACIÓN DE VARIABLES (con cadenas o strings)
let nombreCompleto= nombre + " "+ apellido; 

//OPERACIONES CON VARIABLES (con valores numéricos)
let resultadoP = PI + 4;
console.log (resultado)

resultado = PI/3; 
console.log (resultado)

resultado = (3* PI) - 3; 
console.log (resultado)

resultado = PI + numero; 
console.log (resultado)


//METODOS DE SALIDA
console.log (nombre);
console.log (nombreCompleto);
alert ("Stefi"); 

//METODOS DE ENTRADA
//PROMPT (Solo con strings)
let usuarioP= prompt ("Ingresá tu nombre de Usuario"); 
alert ("Bienvenido/a" + " " + usuario); //es de salida el alert pero lo escribo para que se vea en la página 

//PARSEFLOAT/PARSEINT (Solo con valores numéricos)
let num1= parseFloat (prompt ("Ingresar numero")); 
let num2= parseFloat (prompt ("Ingresar otro numero")); 
let resultadoNumeros= num1 + num2; 
alert (resultadoNumeros); 


//CLASE 2: CONTROL DE FLUJOS 

//CONDICIONALES 
if (true) {
    console.log ("Vas a ver este mensaje"); 
}
console.log ("Resto del código");

let temperatura= 43; 
if (temperatura < 30) {
    console.log ("Está agradable");
} else {
console.log ("Hace calor");
}


let usuario= prompt ("Ingresa tu usuario")
if (usuario == "") {
    console.log ("No ingresaste tu nombre de usuario");
} else {
    console.log ("Bienvenido/a" + usuario)
}



let edad = parseFloat (prompt ("Ingresa tu edad")); 
if (edad > 18) {
    console.log ("Bienvenido/a al casino")
} else {
    console.log ("No podes ingresar al casino")
}

//Condicionales que devuelven valores booleanos 
let mayorEdad= edad > 18; 
console.log (mayorEdad); 
if (mayorEdad) {
    "Bienvenido al casino"
} else {
    "No puedes ingresar al casino"
}


//CLASE 3 
//FOR: Se utiliza para repetir un bloque de código un numero de veces especificas 
for (let i = 0; i < 4; i++) {
    alert("Hola trolos")
    alert("No me digas trolo")
}
alert("Bue ya fue ahre")

//let ingreso = parseInt(prompt("Ingresa un número para multiplicar"));
if (isNaN(ingreso)) {
    alert("El valor ingresado no es un número")
} else {
    for (let i = 0; i <= 10; i++) {
        let resultado = ingreso * i;
        console.log("El resultado de" + ingreso + "X" + i + "es" + resultado);
    }
}

let ingreso = prompt("Ingresa una opcion \n 1.Cafe \n 2.Te \n 3.Jugo")

switch (ingreso) {
    case "1":
        alert("Seleccionaste Cafe");
        break;

    case "2":
        alert("Seleccionaste Te");
        break;

    case "3":
        alert("Seleccionaste Jugo");
        break;

    default:
        alert("Opción no válida");
        break;

}

//CLASE 4: FUNCIONES

//declaracion de la funcion
function saludar() {
    console.log("Hola chicos")
}

//invocar o llamar 
for (let i = 0; i < 5; i++) {
    saludar()
}

function saludoPersonalizado (nombre) {
    alert ("Hola " + nombre)
}

saludoPersonalizado ("Stefi")

for (let i = 0; i < 3; i++) {
    let ingreso= prompt ("Ingresa tu nombre para que te salude")
    saludoPersonalizado (ingreso)
} 

let numero1=parseInt (prompt ("Ingresa un numero"))
let numero2= parseInt (prompt ("Ingresa otro numero"))
function suma (num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "No son números";
    } else {
        return num1 + num2; 
    }
}

function mensaje (mensaje) {
    alert (mensaje)
}

let resultado = suma (numero1,numero2)
mensaje (resultado); 
