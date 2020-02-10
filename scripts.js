/**
 * autor: webpegoga
 */

//
//variables en una linea
let nombre = 'Amigos.'
alert("Hola " + nombre)
console.log(nombre)

//
//variables en multilinea
let variable1 = 10,
    variable2 = "2",
    variable3 = true,
    variable4, variable5, variable6
alert(variable3)

//
//constantes
const pi = 3.141516 //pi = 3.12 //error no es posible
alert(pi)
console.log(pi)

//
//comilla inversa //revisar en sonola elements
let div = `
    <div class="container">
        ${nombre}
    </div>
`
document.body.innerHTML = div

//
//ipo de datos compuestos
let numeros = [4,5,6,7,8]
let datos = {
    nombre : "al",
    apellido : "gB",
    edad : 53
}
console.log(numeros)
console.log(datos)


console.log(typeof numeros)
console.log(typeof pi)
console.log(typeof datos)