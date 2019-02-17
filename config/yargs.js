const id = {
    demand: true,
    alias: 'i',
    desc: 'id'
}

const description = {
    demand: true,
    alias: 'd',
    desc: 'Crear tarea por hacer'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca como completed o pendiente la tarea'
}

const argv = require('yargs')
    .command('add', 'Crear tarea', {
        description,
    })
    .command('list', 'Listar tareas', {
        completed,
    })
    .command('update', 'Actualizar estado', {
        id,
        completed,
    })
    .command('delete', 'Borrar', {
        id,
    })
    .help()
    .argv;

module.exports = {
    argv
}