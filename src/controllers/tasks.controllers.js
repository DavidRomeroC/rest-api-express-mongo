const Tasks = require('../models/Tasks')

const listTasks = async (req, res) => {
    const listTasks = await Tasks.find().lean()
    res.send(listTasks)
}

const createTask = async (req, res) => {
    const task = Tasks(req.body)
    console.log(task)
    await task.save()
    res.status(200).send('Guardado con exito')
}

module.exports = {
    listTasks,
    createTask
};