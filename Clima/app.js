require("dotenv").config()
const cli = require("nodemon/lib/cli")
const { inquirerMenu, pausa,leerInput, listarLugares } = require("./helpers/inquirer")
const Busquedas = require("./models/busquedas")


const main = async () => {
    let opt 
    const busquedas = new Busquedas
    do {
        opt = await inquirerMenu()

        switch(opt){
            case 1:
                const termino = await leerInput('Ciudad: ')
                const lugares = await busquedas.ciudad(termino)
                const id = await listarLugares(lugares)
                if(id === '0'){
                    continue
                }
                const lugarSel = lugares.find(l => l.id === id)
                busquedas.agregarHistorial(lugarSel.nombre)

                const climaLugar = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud)

                console.log("\n Información de la ciudad\n".green)
                console.log("Ciudad: "+lugarSel.nombre)
                console.log("Latitud: "+lugarSel.latitud)
                console.log("Longitud: "+lugarSel.longitud)
                console.log("Temperatura: "+climaLugar.temp)
                console.log("Temperatura Minima: "+climaLugar.max)
                console.log("Temperatura Maxima: "+climaLugar.min)
                console.log("Descripcion: "+climaLugar.desc)
            break;
            case 2:
                busquedas.historial.forEach((lugar, i) => {
                    console.log(`${i+1}.`.green +`${lugar}`)
                })
            break;
            case 0:
               
            break;
            
        }
        if(opt !== 0) await pausa()
	} while (opt !== 0);
}

main()