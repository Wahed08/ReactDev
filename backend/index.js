const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');


//express app
const app = express();

//connect to db
//const URI = 'mongodb://Farhad:123farhad@node-shard-00-00.g4eui.mongodb.net:27017,node-shard-00-01.g4eui.mongodb.net:27017,node-shard-00-02.g4eui.mongodb.net:27017/Register?ssl=true&replicaSet=atlas-rywlaq-shard-0&authSource=admin&retryWrites=true&w=majority';
//mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((result)=>console.log('success')).catch(err=>console.log(err));


app.listen(5000);

//register view engine
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send({project: "Registration"});
})

//middleware
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

//routes
app.use('/post',routes);


// app.listen(5000, ()=>{
//     console.log('app connecting to srever port 5000');
// })