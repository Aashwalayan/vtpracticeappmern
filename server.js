const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const connectDB = require('./config/db');
const { route } = require('./routes/routes');
const router = require('./routes/routes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParse.json());

//database connect code
connectDB();

//route section
const allRoutes = require('./routes/routes');
app.use('/api', allRoutes);


const PORT = process.env.PORT || 5500

app.listen(PORT, () =>{
    console.log("server is running")
});