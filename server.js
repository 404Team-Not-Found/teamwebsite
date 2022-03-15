const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = express();
app.use(express.static());
app.use(bodyparser.json());
app.get('/',(req,res)=>{
    res.send("Hello Brower");
});
https.createServer({},
app).listen(port, () => {
    console.log('listening...')
})