//---------------------------------------------------------- Ficheros 
// const { crearArchivo } = require("./helpers/multiplicar")
// console.clear()

// crearArchivo(734345)
// .then( nombreArchivo => console.log(nombreArchivo+" creado"))
// .catch(err => console.log(err))

// ----------------------------- Yargs
const argv = require("yargs")
.option("h", {
    alias: "hasta",
    type : "number",
    default: 10,
    describe: "Numero hasta donde quieres llegar "
}).argv

// console.log(process.argv)
// console.log(argv)
// console.log("base: yargs "+argv.base)

const colors = require('colors');
const { demandOption } = require("yargs");
colors.enable()
console.log('hello'.rainbow); // outputs green text