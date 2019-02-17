//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const color = require('colors');

const todo = require('./todo/todo');

let comando = argv._[0];

switch (comando) {

    case 'add':
        let task = todo.add(argv.description);
        break;

    case 'list':

        let taskList = todo.list(argv.completed);

        for (let task of taskList) {
            console.log('========== TO DO =========='.green);
            console.log('ID:', task.id);
            console.log(task.description);
            console.log('Completed:', task.completed);
            console.log('===========================\n'.green);
        }
        break;

    case 'update':

        var result = todo.update(argv.id, argv.completed);

        if (result) {
            console.log('ACTUALIZADO'.green);
        } else {
            console.log('ID DESCONOCIDO'.red);
        }
        break;

    case 'delete':

        var result = todo.del(argv.id);

        if (result) {
            console.log('ACTUALIZADO'.green);
        } else {
            console.log('ID DESCONOCIDO'.red);
        }
        break;

    default:

        console.log('No reconocido');
        break;
}