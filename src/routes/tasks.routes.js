const { Router } = require('express')
const { listTasks, createTask } = require('../controllers/tasks.controllers')

const router = Router()

router.get('/tasks', listTasks)

router.post('/tasks', createTask)

module.exports = router;