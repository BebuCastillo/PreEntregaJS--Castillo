/* Inicio de Sesión*/

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

/*Selección de cervezas para comprar*/
let costoBlondie = 550
let costoIpa = 800
let costoHoney = 650
let costoScottish = 600

let cerveza = "Consulte del menu el costo de la cerveza a comprar digitando su número: \n1.- Blondie \n2.- Ipa \n3.- Honey \n4.- Scottish \n5.- COMPRAR"
let opcion = Number(prompt(cerveza))
while (opcion != 5) {
    if (opcion == 1 ) {
    alert("El costo de la Blondie es: $"+ costoBlondie)
} else if (opcion == 2 ) {
    alert("El costo de la Ipa es: $"+ costoIpa)
} else if (opcion == 3 ) {
    alert("El costo de la Honey es: $"+ costoHoney)
} else if (opcion == 4 ) {
    alert("El costo de la Scottish es: $"+ costoScottish)
} else {
    alert("Opción incorrecta")
}
opcion = prompt(cerveza)
}


/*Compra de cervezas*/

let estilo = "Seleccione el estilo a comprar: \n1.- Blondie \n2.- Ipa \n3.- Honey \n4.- Scottish \n5.- Finalizar"
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
