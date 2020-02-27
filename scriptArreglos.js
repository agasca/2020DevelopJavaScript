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

//
//agregat oy quitar valores
let arr = [1,2,3,4]
arr.push(5)
c(arr)
c(arr.length)

//
//quitar elemento (el ultimo)
arr.pop()
c(arr)
c(arr.length)

//
//al inicio del array
arr.unshift(`nuevo`)
c(arr)
c(arr.length)

//
//elimina el primer valor
arr.shift()
c(arr)
c(arr.length)

//arreglo de texto
arrTexto = [`peru`, `colombia`, `mexico`, `bolivia`]
c(arrTexto)
c(arrTexto.length)

//splice posicion personalizada
arrTexto.splice(2,0, `chile`, `ecuador`)
c(arrTexto)
c(arrTexto.length)

arrTexto.splice(4,1, `costa ricac`)
c(arrTexto)
c(arrTexto.length)


//eliminar personalizada
arrTexto.splice(1,1)
c(arrTexto)
c(arrTexto.length)

//extraer
arrTexto.slice(2,4)
c(arrTexto)
c(arrTexto.length)

//invertir
let sal = 'hola mama'
c(sal.split('').reverse(''))
c(sal.split('').reverse('').join(''))

const revreseText = cadena => cadena.split('').reverse('').join('')
c(revreseText(`mexico`))

//ordenar no opera con numeros
let arr2 = ['B', 'A', 'Z', 'F']
c(arr2.sort())
c(arr2.sort().reverse())

//ordenar numeros
let numbers = [1,10,100,35,45,300]
c(numbers.sort((a,b)=> a-b)) //algoritmo

let numbers2 = [99,98,46,34,0]
//concatenar
//.concat 
c(numbers.concat(numbers2))
c(numbers2.concat(7,17,27))

//.join convierte numero a cadena con delimitador
c(numbers.join('|'))

let inicio = Date.now()
c(inicio.toString())
let  today = new Date()
c(today.toISOString())


let fecha = new Date(Date.now())    //https://www.geeksforgeeks.org/javascript-date-now/
c(fecha.toString())
c(fecha
    .toString()
    .slice(0,10).replace(/-/g,"")
 )

 c(fecha
    .toString()
    .slice(16,24)
 )
//Wed Feb 26 2020 12:36:48 GMT-0600 (hora estándar central)
//alberto gasca bernal
let nombre = "alberto"
let apellido = "gasca"

let r = Math.random().toString(36).substring(7) //36 es la base, 2 es binario, 16 es hexa
c(r)
c(nombre, r);
r = Math.random().toString(36).substring(7)
c(r)
c(apellido, r);



//
//funcion
let nomApe = (cadena) => {
   this.data = cadena
   this.min = 0
   this.max =  this.data.length
   this.posData =  Math.random() * (this.max - this.min) + this.min 
   c("posData:"+posData)
   return this.data.substr(this.posData,1)
}

c("RES:"+nomApe(nombre))
c("RES:"+nomApe(apellido))

let token = (n, a) => {
   //c("dentro de la funcion")
   this.nombre = n
   this.apellido = a
   this.fechaToken = new Date(Date.now())   
   this.r = Math.random().toString(36).substring(7) //36 es la base, 2 es binario, 16 es hexa
   this.resultado = ""
   this.resultado= (this.nombre + 
   this.apellido + 
   this.fechaToken.toString().slice(16,24) + 
   this.r)

   return resultado
}

c(token(nomApe(nombre), nomApe(apellido)))
c("fin")