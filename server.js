const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

var cors = require('cors');

//enables cors


const items= require('./routes/api/items');
const users= require('./routes/api/users');


const app =express();

// bodyparser middleware
app.use(bodyParser.json());

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }));
//db config

const db=require('./config/keys').mongoURI;

//connection db

mongoose
    .connect(db)
    .then(()=>console.log('mongodB connected'))
    .catch(err => console.log(err));


// use routes

app.use('/api/items', items);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server start in port ${port}`))