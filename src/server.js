//const express = require('express');
import express from 'express';
const server = express();

const PORT = process.env.PORT || 3000;

server.get("/", (req, res)=>{
    res.send("Hellow World" + new Date() );
});
server.listen(PORT,()=>{
    console.log(`Server id running on port ${PORT}`);
});