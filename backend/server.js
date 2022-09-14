var express = require("express");
var app = express();
var PORT = 3000;
var cors = require("cors");
var dotenv = require('dotenv').config();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require("route/route.ts"));
app.listen(PORT, function () {
    console.log(`server is running on port${PORT}`);
});
