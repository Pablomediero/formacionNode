const express = require('express')
const cors = require("cors")
const {dbConnection} = require("../database/config")

class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios"
        this.conectarDB()
        this.middlewares()
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares(){
        
        // CORS
        this.app.use(cors())

        // Parseo y lectura del body
        this.app.use(express.json())

        // Directorio public
        this.app.use(express.static("public"))

    }

    routes() {
        this.app.use(this.usuariosPath, require("../routes/user"))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en http://localhost:"+this.port)
        })
    }
}

module.exports = Server