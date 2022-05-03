const axios = require("axios")
const fs = require("fs")

class Busquedas {
    historial = []
    dbPath = "./db/database.json"

    constructor(){
        this.leerDB()
    }

    get paramsMapbox() {
        return {
            "access_token": process.env.MAPBOX_KEY,
            "limit": 5,
            "language": "es"
        }
    }

    async ciudad( lugar = '' ) {
        try {
            const intance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            })

            const resp = await intance.get()
            // const resp = await axios("https://api.mapbox.com/geocoding/v5/mapbox.places/Madr.json?proximity=ip&language=es&access_token=pk.eyJ1IjoicG1lZGllcm8iLCJhIjoiY2wycHpxeGtjMWxzZDNibXVicTY3aWt5ciJ9.Iwyr0ACsRo60wk0cUEoi9Q")
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                longitud: lugar.center[0],
                latitud: lugar.center[1],
            }))
            return []
        } catch (error) {
            
        }
        
    }

    async climaLugar(lat, lon){
        try {
            const instance = axios.create({
                baseURL: "https://api.openweathermap.org/data/2.5/weather",
                params: {
                    lat,
                    lon,
                    appid: process.env.OPEMWEATHER_KEY,
                    units: "metric",
                    lang: "es"
                }
            })

            const resp = await instance.get()
            const {weather, main} = resp.data
         
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        } catch (error) {
            console.log("Error: "+error)
            
        }
    }

    agregarHistorial(lugar = ""){

        if(this.historial.includes(lugar.toLocaleLowerCase())){
            return
        }

        this.historial.unshift(lugar.toLocaleLowerCase())
        this.guardarDB()
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath, JSON.stringify(payload))
    }

    leerDB(){
        if(!fs.existsSync(this.dbPath)){
            return
        }

        const info = fs.readFileSync(this.dbPath, {encoding: 'utf-8'})
        const data = JSON.parse(info)
        this.historial = data.historial


        
    }
}

module.exports = Busquedas