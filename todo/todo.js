const fs = require('fs');

let todoList = [];
let counter = 0;

const saveDB = () => {

    let counterData = JSON.stringify(counter);
    fs.writeFile('./db/counter.json', counterData, (err) => {
        if (err) throw new Error('Error saving...', err);
    });

    let data = JSON.stringify(todoList);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('Error saving...', err);
    });
}

const loadDB = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }

    try {
        counter = require('../db/counter.json');
    } catch (error) {
        counter = 0;
    }
}

const add = (description) => {
    loadDB();
    let todo = {
        id: counter,
        description,
        completed: false,
    }
    todoList.push(todo);
    counter++;
    saveDB();

    return todo;
}

const list = (completed) => {
    loadDB();

    if (completed === 'true') {
        return todoList.filter(task => task.completed === true)
    }
    if (completed === 'false') {
        return todoList.filter(task => task.completed === false)
    }
    return todoList;

}

const update = (id, completed = true) => {
    loadDB();

    let index = todoList.findIndex(task => task.id === id);

    if (index >= 0) {
        todoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const del = (id) => {
    loadDB();

    filteredList = todoList.filter(task => task.id !== id);
    if (filteredList === todoList) {
        return false;
    } else {
        todoList = filteredList;
        saveDB();
        return true;
    }
}

module.exports = {
    add,
    list,
    update,
    del,
}