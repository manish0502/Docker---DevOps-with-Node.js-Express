require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');
const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`


const connectWithRetry = ()=>{

mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false,
})
    .then(()=> console.log('successfully Connected to DB'))
    .catch((err)=> {
        console.log(err);
        setTimeout(connectWithRetry,5000);
    });

}

connectWithRetry();




const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`<h1>Hello Manish from express app<\h1>`)
})




app.listen(port ,()=>{
    console.log(`Server is running at port ${port} `)
})

