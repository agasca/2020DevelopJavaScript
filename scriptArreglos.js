const c = console.log
c(`arreglos`)

//
//array
let arreglo =  [`hola`, 1, true, [1,2], c, 4+4, {}]
c(`R. todo el arrego:` + arreglo)
c(`R el indicie 2:` +arreglo[2])
c(`R long del arreglo:` +arreglo.length)
c(arreglo[arreglo.length-1])

//asignar variables a los elementos del array "desestructuracion"
let arregloConVariables = [`Hola`, `como`, `estan`, `hoy`]
c(arregloConVariables)
let cadena1 = arregloConVariables[0]
let cadena2 = arregloConVariables[1]
let cadena3 = arregloConVariables[2]
//...
//se crea arreglo de variables s1,s2,..,s4 (iguala por posicion valor y variable)
let [s1,s2,s3,s4] = arregloConVariables
c(s1)
c(s2)
c(s3)
c(s4)