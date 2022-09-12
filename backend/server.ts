const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const dotenv = require('dotenv').config()

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api', require(route/route.ts))
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})