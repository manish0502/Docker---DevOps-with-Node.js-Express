require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose.connect(
    "mongodb://manish:mypassword@mongo:27017/?authSource=admin")
    .then(()=> console.log('successfully Connected to DB'))
    .catch((err)=>  console.log(err)
);



const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.send(`<h1>Hello Manish from express app!!!<\h1>`)
})




app.listen(port ,()=>{
    console.log(`Server is running at port ${port} `)
})

