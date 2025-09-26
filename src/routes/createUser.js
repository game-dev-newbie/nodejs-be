const express = require("express");
const router = express.Router();
//import controller

const Fn  = require("../controllers/restaurantControllers");
const fn = new Fn()
//const postCreateUser = require("../controllers/restaurantControllers");

//Define a route for the home page
router.get("/create", fn.getCreatePage);
router.get("/edit/:userId", fn.getEditUser)
//router.put("/update")
router.post("/create-user", fn.postCreateUser);

module.exports = router;
