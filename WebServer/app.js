
const express = require('express')
const app = express()
const hbs = require("hbs")
require("dotenv").config()
const port = process.env.PORT || 3000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + "/views/partials")
// Contenido Statico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home',{
    nombre: "Pablo",
    titulo: "Curso de Node"
  })
})

app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre: "Pablo",
    titulo: "Curso de Node"
  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre: "Pablo",
    titulo: "Curso de Node"
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname+"/public/404.html")
})


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
