const express = require("express");
const router = express.Router();
//import controller site
const Site = require("../controllers/siteController");
const site = new Site()
//Define a route for the home page

router.get("/about", site.getAboutPage);
router.get("/", site.getHomePage);
module.exports = router;