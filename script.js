const c = console.log
c("inicio")

/*
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
*/

const doSomething = x => y => x * y
c(doSomething)              //x => y => x * y
const a = doSomething(2)(3) //6
c(a)
const b = doSomething(4)    //y => x * y //se quedo en el primer parametro
c(b)
c(doSomething(a)(b(3)))     //1.- a = 6, 2.-  y=>4*y es decir y=>4*3, 3.-multiplica los resultados 6*12 = 72
//

c("fin")