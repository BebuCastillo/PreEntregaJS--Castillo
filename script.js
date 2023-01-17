/*Inicio de Sesión*/

alert("Bienvenido al portal de productos. \nInicie sesión para continuar")
let usuarioReg = "Alejandro"
let passwordReg = "1234"

for (let i = 1; i <= 3; i++) {

let usuario = prompt("Ingrese su Usuario")
let password = prompt("Ingrese su Contraseña")
if (usuario == usuarioReg && password == passwordReg) {
    alert ("Bienvenido a la Selección de productos");
    break;
} else {
    alert ("datos incorrectos. Intento: " +i +" de 3");
    let respuesta = prompt("Recuperar su usario y/o contraseña? si/no").toLowerCase()
    if (respuesta == "si") {
        alert("Su usuario es: "+usuarioReg+" , y su contraseña: "+passwordReg)
    } else {
    alert("Buena suerte y hasta luego")
    }
}
}

function cerveza(nombre, color, precio) {
    this.nombre = nombre;
    this.color = color;
    this.precio = precio;
}
const blondie = new cerveza("Blondie", "Rubia", 550);
const ipa = new cerveza("Ipa", "Rubia", 800);
const honey = new cerveza("Honey", "Rubia", 650);
const scottish = new cerveza("Scottish", "Roja", 600);
const stout = new cerveza("Stout", "Negra", 650);
const wheat = new cerveza("American Wheat", "Blanca", 700);


function infoCerveza(cerveza) {
    return cerveza.nombre + ": Cerveza " + cerveza.color + " a un costo de $" + cerveza.precio
}

let consulta = "Consulte la información de la cerveza a comprar: \n1.- Blondie \n2.- Ipa \n3.- Honey \n4.- Scottish \n5.- Stout \n6.- American Wheat \n7.- Verificar Stock"
let opcion = Number(prompt(consulta))
while (opcion != 7) {
    if (opcion == 1 ) {
    alert(infoCerveza(blondie))
} else if (opcion == 2 ) {
    alert(infoCerveza(ipa))
} else if (opcion == 3 ) {
    alert(infoCerveza(honey))
} else if (opcion == 4 ) {
    alert(infoCerveza(scottish))
} else if (opcion == 5 ) {
    alert(infoCerveza(stout))
} else if (opcion == 6 ) {
    alert(infoCerveza(wheat))
} else {
    alert("Opción incorrecta. Seleccione del 1 al 7")
}
opcion = prompt(consulta)
}

const stockCerveza = ["Blondie", "Ipa", "Honey", "Scottish", "Stout"]
let consultaStock = prompt("Consulte disponibilidad. Ingrese el nombre de la cerveza")
if (stockCerveza.indexOf(consultaStock) != -1) {
   alert("Tenemos " + consultaStock + " en Stock. Proceda a la compra")
}
   else {
    alert("Lamentablemente no disponemos de ese estilo.")
}


/*Compra de cervezas*/

let costoBlondie = 550
let costoIpa = 800
let costoHoney = 650
let costoScottish = 600
let costoStout =650

let estilo = prompt("Seleccione el estilo a comprar: \n1.- Blondie \n2.- Ipa \n3.- Honey \n4.- Scottish \n5.- Finalizar")
let cantidad = Number(prompt("Cantidades:"))
let opcion2 = Number(prompt(estilo))
while (opcion2 != 5) {
    if (opcion2 == 1 ) {
    alert("Su compra de "+cantidad+" Blondie es: $"+ costoBlondie*cantidad)
} else if (opcion2 == 2 ) {
    alert("Su compra de "+cantidad+" Ipa es: $"+ costoIpa*cantidad)
} else if (opcion2 == 3 ) {
    alert("Su compra de "+cantidad+" Honey es: $"+ costoHoney*cantidad)
} else if (opcion2 == 4 ) {
    alert("Su compra de "+cantidad+" Scottish es: $"+ costoScottish*cantidad)
} else {
    alert("Opción incorrecta")
}
opcion2 = prompt(estilo)
}

alert("Gracias, vuelva pronto")
