const  mongoose = require('mongoose')

const connectDB = async() =>{

    try {
        await mongoose.connect('mongodb://localhost:27017/todoListDB')
        .then(()=>{
            console.log('MongoDb is Connected');
        })
    } catch (error) {
        console.log('error',error);
    }
}

module.exports = connectDB