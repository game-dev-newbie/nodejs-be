//define controller for home page
const express = require("express");
const db = require("../config/database");
const Services = require("../services/CRUDServices");
const services = new Services();
class Fn {
  //[GET] /restaurant
  getRestaurantPage(req, res) {
    return res.render("restaurant", { title: "Restaurant Page" });
  }
  //[POST] /create-user
  async postCreateUser(req, res) {
    let { email, name, city } = req.body;
    //validate request body
    //function main to handle async code
    try {
      if (!email || !name || !city) {
        throw new Error("Missing required fields: email, name, city");
      }
      const con = await db.connect();
      const [result, field] = await con.execute(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city]
      );

      console.log(`check result ${JSON.stringify(result)}`);
    } catch (error) {
      console.error("Error in request body:", error.message);
      return res.status(400).send(error.message);
    }
    //logic create user
    //connect db
    //create sql query
    //run sql query
    //   INSERT INTO Users (email, name, city)
    // VALUES (2,"thanhdat@gmail.com","eric","TPHCM" );
    console.log(`Request body:`, email, name, city);
    res.send("Successfull!!!");
  }
  getCreatePage(req, res) {
    return res.render("createUser", { title: "Create User Page" });
  }
  async getEditUser(req, res) {
    try {
      const userId = req.params.userId;
      //get user by id
      const [user] = await services.getUserId(userId);
      if (user === undefined) {
        throw new Error("Userid is not found");
      }
      console.log(`check id = ${JSON.stringify(user)}`);
      return res.render("edit", { title: "Edit Form", userId: user });
    } catch (err) {
      console.error("DB error:", err.message);
      //return res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = Fn;
