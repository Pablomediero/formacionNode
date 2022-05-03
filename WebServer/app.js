
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'hbs')
// Contenido Statico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.get('/hola', (req, res) => {
  res.send(__dirname+"/public/404")
})

app.get('*', (req, res) => {
  res.sendFile(__dirname+"/public/404.html")
})


app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
