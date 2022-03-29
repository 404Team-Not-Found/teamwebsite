import express from "express";
// const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});
app.get('/eduardo', (req,res) => {res.send("Hello Eduardo")});
app.listen(port, ()=>console.log("Listening")); 