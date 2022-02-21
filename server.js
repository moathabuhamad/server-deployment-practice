'use strict';

const express = require('express');

const app = express();

function start(port) {
    app.listen(port)
}

app.get('/',(req,res)=>{
    res.send('home route')
})

app.get('/data',(req,res)=>{
    res.status(200).json({
        name: 'moath',
        email:'moathabuhamad'
    })
})

module.exports = {
    app: app,
    start: start
}