const Tasks = require('../models/Tasks')

const listTasks = async (req, res) => {
    const listTasks = await Tasks.find().lean()
    res.send(listTasks)
}

const createTask = async (req, res) => {
    const task = Tasks(req.body)
    if (task.title && task.description) {
        await task.save()
        res.send('Guardado con exito')
    } else {
        res.send('No hay nada que guardar')
    }
}

const updateTask = async (req, res) => {
    const {id} = req.params
    await Tasks.findByIdAndUpdate(id, req.body)
    res.redirect('/tasks')
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    await Tasks.findByIdAndDelete(id)
    res.send('Tarea borrada con exito')
}

module.exports = {
    listTasks,
    createTask,
    deleteTask,
    updateTask,
};