const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParse.json());



app.get('/user', (req, res) =>{
    console.log('api is working')
    return res.send({
        'status': 200,
        'data': "api is working"
    });
})  

app.listen(5000, () =>{
    console.log("server is running")
});