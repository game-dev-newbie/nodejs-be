//import dotenv
require("dotenv").config();
//import express
const express = require("express");
//import config view engine
const configViewEngine = require("./config/viewEngine");

//import web routes
const webRoutes = require("./routes/web");

//create express app
const app = express();

//Set port and hostname
const port = process.env.PORT;
const hostname = process.env.HOST_NAME;



//use function config view engine
configViewEngine(app);

//use web routes
webRoutes(app);
// app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
