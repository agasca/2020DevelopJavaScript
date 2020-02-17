let c = console.log

let cadena = `alberto`
//ejemplo01
function saludar(persona, sexo){
    return sexo === 'm'
            ? `Bienvenida ${persona}`
            : `Bienvenido ${persona}`
}

c(saludar(cadena, `h`))
c(saludar(`beta`, `m`))