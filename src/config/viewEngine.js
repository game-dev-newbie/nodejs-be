//Config engine for server.js
//Import engine
//const morgan = require("morgan");
const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

//Create function config view engine
const configViewEngine = (app) => {
  //enable req.body POST method from form
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  //Static files
  app.use("/public", express.static(path.join("./src", "public")));
  //Template engine handlebars
  //set extension file .hbs
  app.engine("hbs", hbs.engine({ extname: ".hbs" }));
  app.set("view engine", "hbs");
  //Thư mục chứa file view
  //__dirname: trả về đường dẫn tuyệt đối đến thư mục chứa file hiện tại
  app.set("views", path.join("./src", "resources", "views"));
  //config http logger
  //app.use(morgan("combined"));
};
//Export function
module.exports = configViewEngine;
