const express = require("express");
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'dist', 'rick-and-morty')))

app.all("*",(req,res)=>{
    res.sendFile(path.join(__dirname, 'dist', 'rick-and-morty','index.html'));
});

app.listen(process.env.PORT || 3000)