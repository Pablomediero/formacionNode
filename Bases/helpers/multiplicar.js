const fs = require('fs');
const crearArchivo = async (num = 0) => {
	let salida = '======================\n';
	for (let i = 0; i <= 10; i++) {
		salida += +num + ' x ' + i + ' = ' + i * num + '\n';
	}

	salida += '======================';
	console.log(salida);
	fs.writeFile('ficheros/tabla' + num + '.txt', salida, (err) => {
		return err;
	});
	return 'ficheros/tabla' + num + '.txt';
};

module.exports = {
	crearArchivo
};
