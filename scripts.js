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
        <p>Funciones</p>
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

let edad = parseInt(prompt("Qu{e edad tienes?"),10)
if(edad !==NaN){
    if(edad>18){
        console.log("Mayor de edad")
    }else{
        console.log("eres menor de edad")
    }
}else{
    edad = parseInt(prompt("tu edad debe ser un numero"),10)
}

//
//funciones
function saludar(persona, sexo){
    let saludo = sexo === 'm'
        ? 'Bienvenido'
        : 'bienvenida'
    return `${saludo} al profe, $persona`
}

console.log(saludar('beto','m'))
console.log(saludar('ixa','f'))

//
//
var fxNombre = function(name){
    n = name
    return `hola ${n}, como estas?`
}
console.log(fxNombre("agb"))

//
//
const fxSaludarFlecha = (name, sex = 'm') => {
    let saludo = sex === 'm'
        ? 'Welcome Mr'
        : 'Welcome Ms/Miss'
    return `${saludo} ..., ${name}`
    //return valor
}
console.log("Fx => " + fxSaludarFlecha('beto','m'))
console.log("Fx => " + fxSaludarFlecha('luis'))
console.log("Fx => " + fxSaludarFlecha('ixa','f'))


///... spread operator / parametro REST
const sumarTodos = (... numeroX) =>{
    let resultado = 0
    console.log(numeroX)
    console.log([4])

    for (let i = 0 ; i < numeroX.length; i++){
        resultado += numeroX[i]
    }

    return resultado

}
sumarTodos(1,2,3,4,5,6,7,8,9)
console.log(sumarTodos(1,2,3))

/**
 * las funciones son ciudadanos de primera clase
 * por lo que las funicones son un valor
 * las funcioines pueden ser almacenadas en variables o constantes
 * pueden ser pasadas copmo argmentos de otra funcion )(callbacks)
 * pueden ser retornadas por otra funcion (clousures)
 * pueden tener metodos o propiedades (POO)
 */
//             |-esto es un valor
//const c = console.log()
//             |-esto es una funcion
 const c = console.log

 console.log(c)
 const multiplicar = (a,b) => a*b
 c("resultado c:"+multiplicar(3,4))

 let age1 = multiplicar(5,4)
 c("resultado c:"+age1)
 let age2 = multiplicar(age1,2)
 c("resultado c:"+age2)
 let age3 = multiplicar(multiplicar(3,5),2)
 c("resultado c:"+age3)


 //closures
function Addition(x){
    return function(y){
        return x + y 
    }
}

c("resultado c:"+ Addition(2) )
c("resultado c:"+ Addition(2)(5))


//flecha
//                       |               retorna lo que esta a la derecha
//                             |         retorna lo que esta a la derecha
//                           |--------|
//                               |----|
const additionFlecha = x => y => x + y
//                               |----- parametro 1
//                                  |-- parametro 2
c("resultado c:"+ additionFlecha(2)(5))


//
//ejemplo
//funcion recibe un parametro X y que retorna otra funcion que recibe un parametro y retorna la operacion x, y
const foo = x => y => x + y 

const a = foo(4)(3)     //7
c("Res a:"+a)
const b = foo(5)        //y=>x+y   //como solo paso un parametro solo retorna lo interno
c("Res b:"+b)

c("R:"+foo(a)(b(9)))    //7+(y=>5+y)
                        //foo(7)(y=>5+y)  //5+9 = 14
                        //14+7=21


const a1 = foo(14)(31)     //45
c("Res a1:"+a1)
const b1 = foo(15)        //y=>x+y   //como solo paso un parametro solo retorna lo interno
c("Res b1:"+b1)

c("R:"+foo(a1)(b1(19)))    //45+(y=>15+y)
                          //foo(45)(y=>15+y)  //15+19 = 34
                          //45+34=79


//funciones puras
let a01 = 'hola---'
const saludar01 = (saludo010, persona01) => `${saludo010} ${persona01}`

c("a01:" + saludar01(a01,'luis'))
c("a01:" + a01)

//funciones autoinvocadas
let a010 = 'hola---'
const saludar010 = ( (saludo0100, persona010) => `${saludo0100} ${persona010}` ) (a010,'beto')

c("a010:" + saludar010)


//funcion anonimas (callback pasadr una funcion a otra como parametro)
setTimeout( () => {
    alert('hola')
}, 3000 )


//scope ambito contexto
{
    let profesor = 'beto'
}
//c(profesor)   //no lo visualiza



//closures
//valores internos llegar a externos
function aumentarCl0 () {
    let numeroCl0 = 0   //esta protegida
    return function(){
        numeroCl0++
        c(numeroCl0) 
    }
}

aumentarCl0()() 
aumentarCl0()() //no suma
aumentarCl0()() //no suma
const incrementar = aumentarCl0()
incrementar()
incrementar()
incrementar()
incrementar()



//this
//representa al objeto del cual se ejecuta la opcion
//las => permiten acceder al this superior dentro de un closure (lexical this)
let user = {
    nombre: 'al',
    edad:54,
    getEdad(){
        c(this.edad)
    }
}
user.getEdad()



alert("Fin")

