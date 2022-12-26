const { Router } = require('express')
const { listTasks, createTask, deleteTask, updateTask } = require('../controllers/tasks.controllers')

const router = Router()

router.get('/tasks', listTasks)

router.post('/tasks/create', createTask)

router.post('/tasks/:id/update', updateTask)

router.get('/tasks/:id/delete', deleteTask)

module.exports = router;