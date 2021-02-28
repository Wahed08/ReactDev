const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cors = require('cors');
const DB = require('../backend/DBconfig/DB_URL');

//express app
const app = express();

//connect to db
const URI = DB.URL;
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>console.log('connected')).catch(err=>console.log(err));

//middleware
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hoiche mama');
})

app.use('/post',routes);

app.listen(5000, (req,res)=>{
    console.log('app connecting to srever port 5000');
})