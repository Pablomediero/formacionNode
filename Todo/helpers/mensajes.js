require("colors")

const mostrarMenu = () => {

    return new Promise( resolve => {
        console.clear()
        console.log("==========================".green)
        console.log("  Seleccione una Opcion   ".yellow)
        console.log("==========================\n".green)
    
        console.log(`${'1.'.green} Crear Evento`)
        console.log(`${'2.'.green} Listar Evento`)
        console.log(`${'3.'.green} Listar Evento Completado`)
        console.log(`${'4.'.green} Listar Evento Pendientes`)
        console.log(`${'5.'.green} Completar Evento`)
        console.log(`${'6.'.green} Eliminar Evento`)
        console.log(`${'0.'.green} Salir\n`)
    
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
    
        readLine.question('Selecciona una opcion: ', (opt) => {
            readLine.close()
            resolve(opt)
        })
    })
    
}

const pausa = () => {
    return new Promise ((resolve) => {
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readLine.question(`Presione ${'ENTER'.green} para continuar`, () => {
            readLine.close()
            resolve()
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}