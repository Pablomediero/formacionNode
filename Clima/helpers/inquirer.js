const inquirer = require('inquirer');
require('colors');

const preguntas = [
	{
		type: 'list',
		name: 'opcion',
		message: '¿Que desea hacer?',
		choices: [ 
            {
                value: 1,
                name: `${'1.'.green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.red} Salir`
            }
         ]
	}
];

const inquirerMenu = async () => {
	console.clear();
	console.log('=========================='.green);
	console.log('  Seleccione una Opcion   '.yellow);
	console.log('==========================\n'.green);

    const {opcion} = await inquirer.prompt(preguntas)
    return opcion
};

const pausa = async() => {

    const question = [
        {
            type: "input",
            name: "enter",
            message: `Presione ${'ENTER'.green } para continuar`
        }
    ]

    await inquirer.prompt(question)
}

const leerInput = async(message) => {
    
   const question = [
       {
           type: "input",
           name: "lugar",
           message,
           validate(value) {
               if(value.length === 0){
                   return "Por favor ingrese un valor"
               }
               return true
           }
       }
   ]

   const { lugar } = await inquirer.prompt(question)
   
   return lugar
}

const listarLugares = async(lugares = []) => {
   
    const choices = lugares.map((lugar, i) => {
        
        return {
            value: lugar.id,
            name: `${i+1}.`.green +`${lugar.nombre}`
        }
    })

    choices.unshift({
        value: '0',
        name: `0.`.green +`Salir`
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione Lugar: ',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas)
    return id
}

const confirmar = async (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const {ok} = await inquirer.prompt(question)
    return ok
}

const mostrarlistadoCheckList = async(tareas = []) => {
   
    const choices = tareas.map((tarea, i) => {
        
        return {
            value: tarea.id,
            name: `${i+1}.`.green +`${tarea.desc}`,
            checked: (tarea.completadoEn) ? true : false
        }
    })

   

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(pregunta)
    return ids
}

module.exports = {
	inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarlistadoCheckList
};
