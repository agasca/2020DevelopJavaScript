const c = console.log
c("inicio")

/*
ejemplos fuente en edteam
let cadena = `alberto`
//
//ejemplo01 declaracion funcion
c(`delcaracion de funicion)
function saludar(persona, sexo){
    let saludo = sexo === 'm'
            ? `Bienvenida ${persona}`
            : `Bienvenido ${persona}`
            return `${saludo}, ${persona}`
        }
        
        c(saludar(cadena, `h`))
        c(saludar(`beta`, `m`))

        //
        //ejemplo02 flecha
        c(`declaracion funcion flecha`)
        const saludar = (persona, sexo = `m`) => {
            let saludo = sexo === 'm'
            ? `Bienvenido `
            : `Bienvenida `
            return `${saludo}, ${persona}`
        }
        c(saludar(cadena))
        c(saludar(`beta`, `f`))
        c(saludar(`hugo`))
        c(saludar())
        //
        //si la funcion de flecha retorna directamente un valor, sin instrucciones adicionales, la sintaxis se reduce:
        //const nombreFuncion = (parametros) => valor
        const sumar = (a,b) => a + b
        c(sumar(2,3))
        
        
        //parametro rest (spread operator)) ...
        const sumarTodos =(... numeros) => {
            //c(numeros)
            //c(numeros[4])
    let resultado = 0
    for(let i = 0; i< numeros.length; i++){
        resultado += numeros[i]
    }
    return resultado
}
//dis primeras lineas de fn(sumarTodos)
//sumarTodos(1,2,3,4,5,6) //dara un objeto / array
c(sumarTodos(1,2,3,4,5,6))

//pueden ser almacenadas en variable o constantes
//const c = console.log()   //ejecucion de la Fx y guardarla en la variable, ejemplo es un valor por el return
//const c = console.log     /invocando sus/las instrucciones, ejemplo equivale a un console.log()
//console.log(c)
const multiplicar = (a,b) => a * b
let edad = multiplicar(5,4)
let edad2 = multiplicar(edad, 2)
let edad3 = multiplicar(multiplicar(5,4), 3)
c(edad)
c(edad2)
c(edad3)

//closures
function suma(x){
    return function(y){
        return x + y
    }
}
//                   - RETORNA LTODO LO QUE HAY A LA DERECHA: y => x + y
//                   |
//                   |     |- RETORNA LTODO LO QUE HAY A LA DERECHA: x + y
//                   |     |
const sumaFlecha = x => y => x + y
//c(suma(2))
//resultado
//ƒ (y){
    //    return x + y
    //}
    c(suma(2)(7))   //el primer parentesis para el primer return, el segundo parentesis para el segundo return
    c(sumaFlecha(2)(7))   //el primer parentesis para el primer return, el segundo parentesis para el segundo return
    
    const doSomething = x => y => x * y
    c(doSomething)              //x => y => x * y
    const a = doSomething(2)(3) //6
    c(a)
    const b = doSomething(4)    //y => x * y //se quedo en el primer parametro
    c(b)
    c(doSomething(a)(b(3)))     //1.- a = 6, 2.-  y=>4*y es decir y=>4*3, 3.-multiplica los resultados 6*12 = 72
    //
    
    //
    //programacion funcional
    //
    //no es una funcion pura, dependen del scope/ambito
    let a = `hola`
    const saludo = persona => { 
    a = a + ' ' + persona
    return a
}
c(saludo('beto'))
c(a) //modifico algo que etsba afuera (ambito), no es una funcion pura
//
//funcion pura
let ap = `holaP`
const saludoP = (saludo, personaP) => `${saludo} ${personaP}`  //es una funcion pura
c(saludoP(ap, 'betoP'))
c(ap)

//
//autoinvocadas (sin parentesis)
let aI = `HolaAI `
const saludoAI = ( (saludo, personaP) => `${saludo} ${personaP}` )(aI,`Luis`)  //tiene un parentesis exterior vs las pura, se convierte en una expresion
c(saludoAI)

//
//funciones nonmbradas y anonimas
const saludoP = (saludo, personaP) => `${saludo} ${personaP}`  //es una funcion pura
//se ejecuta nombrandola
c(saludoP())
//funcion callback anonima, no tiene nombre
setTimeout(()=>{
    alert(`hola`)
},3000)

//
//scope o ambito
{
    let profesor = "ag"
    {
        c(profesor)
    }
}

c(profesor)

//
//closures
//a travers de funicones internas llegar a valores externos
function aumentar(){
    let numero = 0
    return function(){
        numero++
        c(numero)
    }
}
aumentar()      //no hizo nada por...  que solo llego oal primer return
aumentar()()    //1
aumentar()()    //1
aumentar()()    //1
aumentar()()    //1, no suma
const incrementar = aumentar()  //tiene el valor de retorno de F(aumentar, 
//su valor de retorno es `return function(){numero++; c(numero)}` 
//y esta funcion hace aumentar su valor en uno al valor de un numero.
//ese numero esta por fuera de la funcion de retorno es `return function(){numero++; c(numero)}` 
//incrementar hace la accion de agregar el valor en uno
//como si fuese una funcion no pura
numero++
c(numero)
}
incrementar()   //1
incrementar()   //2
incrementar()   //3
incrementar()   //4
*/

//
//this
//representa al objeto del cual se ejecuta la funcion}las arrow functions permiten acceder al this superior dentro de un closure (lexical this)
let edad = 10
let user = {
    nomnre: `al`,
    edad: 54,
    getEdad1(){
        c(this.edad)
    },
    getEdad2(){
        c(edad) //no tiene this por lo que toma del scope mas arriba
    }

}
user.getEdad1()
user.getEdad2()

c("fin")