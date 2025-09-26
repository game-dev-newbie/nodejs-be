const express = require("express");
const router = express.Router();
//import controller
const Fn = require("../controllers/restaurantControllers");
const fn = new Fn()
//Define a route for the home page
router.get("/", fn.getRestaurantPage);
module.exports = router;
