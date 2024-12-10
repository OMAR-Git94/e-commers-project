const mongoose = require('mongoose');
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dbuser:omarvai0195@cluster0.xfruwf9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true, useUnifiedTopology: true
        })
        console.log('Connected to Mongodb Atlas');} catch (error) {
        console.error(error);
    }
}
module.exports =connectToDB;