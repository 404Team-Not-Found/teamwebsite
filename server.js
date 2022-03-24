import express from 'express';

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/andrea', (req,res) => {res.send("Hello Andrea")});

app.listen(port, ()=>console.log("Listening"));