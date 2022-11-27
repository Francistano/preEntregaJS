let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let edad = parseInt(prompt("ingrede su edad"));
let efectivo = parseInt(prompt("cuanto efectivo trae?"));
let credito = parseInt(prompt("cuanto credito tiene?"));
let disponible = efectivo + credito;
let valorDeCompra = parseInt(
  prompt("usted esta comprando por un valor de...?")
);

alert(
  "bienvenido" +
    " " +
    nombre +
    " " +
    apellido +
    " " +
    "usted tiene" +
    " " +
    edad +
    " " +
    "años de edad"
);

if (
  efectivo >= valorDeCompra ||
  credito >= valorDeCompra ||
  disponible >= valorDeCompra
) {
  alert("Su compra fue exitosa");
} else {
  alert("Su compra no pudo ser procesada");
}

let food = prompt(`Elija su preferencia:
1: Hamburgusa
2: Milanesa
3: Bife de choriso`)
;

switch (food) {
  case "1":
    alert("Comera hamburguesa.");
    break;
  case "2":
    alert("Comera milanesa.");
    break;
  case "3":
    alert("Comera bife de choriso.");
    break;
  default:
    alert("No disponemos de ese menu.")  
    break;
}

let numero = Number(prompt("Ingrese un numero del uno al 5"));

while (numero <= 10) {
    console.log(`el valor del numero es ${numero}`)
  numero++;
}

let año = 2022

do{
    edad++
    año++
    console.log(`su edad sera de ${edad} años en el ${año}`)
}while(año < 2030)

for (let q = 20; q <= 25; q++) {
    if (q === 23){
        continue;
    }    
    alert(`El valor de q es: ${q}`);
  }


  function saludar(nombre, apellido) {
    console.log(`Saludos ${nombre} ${apellido} `);
  }
  saludar(`${nombre}`, `${apellido}`);