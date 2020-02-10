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
        <p>Via consola</p>
        <p>typeof 5</p>
        <p>typeof "hola"</p>
        <p>typeof function(){}</p>
        <p>type coertion</p>
        <p>5 + 5 + "hola"</p>
        <p>Asignacion por valor (primitivo) o por referencia (compuesto, array, objetos)</p>
        <p>let number1= 50</p>
        <p>let number2= number1</p>
        <p>let number2= 20</p>
        <p>console.log(number2)</p>
        <p>cuando cambio el segundo cambia el primero (arreglos, objetos)</p>
        <p>operadores de asignacion</p>
        <p>=</p>
        <p>+=</p>
        <p>-=</p>
        <p>*=</p>
        <p>*=</p>
        <p>operadores de comparacion</p>
        <p>==</p>
        <p>===   compara igualdad valor + tipo de dato</p>
        <p>!==   compara diferencia valor + tipo de dato</p>
        <p>!=</p>
        <p>x++ posdecremento, para la porxima vez</p>
        <p>++x predecremento, para la porxima vez</p>
        <p>ternario/p>
        <p>expresion ? verdadero : falso/p>
        <p> 2+3 > 50 ? "ok" : "error"/p>
        <p>corto circuito doble pipe ||</p>
        <p>let a</p>
        <p>let b = a || 'agb'</p>
        <p>b  //escribe agb</p>
        <p>corto circuito doble && opuesto al doble pipe ||</p>
        <p>toFixed(n)  //numero decimales redondeado</p>
        <p>parseInt(string,10)  //10, sistema decimal</p>
        <p>parseFloat()</p>
        <p>NaN not a number</p>
        <p>Math.ceil(Math.random() * 10)</p>
        <p>cadena</p>
        <p>'agb'.length    //'agb' es literal (cuando usas el valor/dato no la variable)</p>
        <p>metodos sin parametros</p>
        <p>.trim()</p>
        <p>.toUpperCase()</p>
        <p>.toLowerCase()</p>
        <p>.toUpperCase().trim()</p>
        <p>indexOf(string[,i])</p>
        <p>profesor.indexOf('r')</p>
        <p>profesor.indexOf('o',2)  //la segunda o, segundo caracter</p>
        <p>'hola amigos'.indexOf('o', 'Hola amigos'.indexOf('o') + 1)</p>
        <p>profesor.lastIndexOf('r')</p>
        <p>includes(string[,i])</p>
        <p>'alberto'.includes('ert') //true o false</p>
        <p>startsWith(string[,i])</p>
        <p>endsWith(string[,i])</p>
        <p>replace(original, replacement)</p>
        <p>'hola mundo'replace('mundo', 'amigo')</p>
        <p>se puede utilizar numeros negativos en los siguientes</p>
        <p>split(serpataor[,quantity])</p>
        <p>substring(start[,end]) //no incluye el end</p>
        <p>substr(start[,quantity])</p>
        <p>slice(start[,end])</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
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

let age = prompt('dime tu edad')
let isAdult = age >17
            ? 'eres adulto'
            : 'eres niño'

alert(isAdult)            