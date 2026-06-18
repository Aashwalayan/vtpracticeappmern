const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParse.json());

//database connect code
connectDB();

app.get('/user', (req, res) =>{
    console.log('api done', req.body)
    return res.send({
        'status': 200,
        'data': "api is working"
    });
});

app.listen(5000, () =>{
    console.log("server is running")
});