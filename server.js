import express from "express";

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/jared', (req,res) => {res.send("Hello Jared")});

app.listen(port, ()=>console.log("Listening"));