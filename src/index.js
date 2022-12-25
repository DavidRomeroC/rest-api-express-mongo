const app = require('./app')
const mongoDataBase = require('./database/database')
mongoDataBase()

app.listen(5000, ()=>{
    console.log('server on port 5000')
})