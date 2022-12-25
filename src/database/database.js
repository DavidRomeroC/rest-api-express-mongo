const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

const MONGODB_URI = 'mongodb+srv://david-mongodb-crud:1SR33lHmBXIXgaok@cluster0.9z7mbt1.mongodb.net/?retryWrites=true&w=majority'

const mongoDataBase = async () =>{
    try {
        const db = await mongoose.connect(MONGODB_URI)
        console.log('BD connected to', db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

module.exports = mongoDataBase;