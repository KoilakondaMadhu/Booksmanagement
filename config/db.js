const mongoose = require("mongoose");

// mongoose.connect('mongodb+srv://Deepthi:Deepthidspl@cluster0.u6rmrnh.mongodb.net/?retryWrites=true&w=majority/Book-Store');
mongoose.connect('mongodb://127.0.0.1:27017/Book-Store');

const db = mongoose.connection;

db.on('error',(error)=>{
    console.log('error to connecting with database')
})

db.once('open',function(){
    console.log('Successfully connected to database');
})

