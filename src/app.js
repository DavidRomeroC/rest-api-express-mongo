const express = require('express')
const tasksRouter = require('./routes/tasks.routes')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//MIDDLEWARES

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(tasksRouter)

module.exports = app;

