//import home router
const restRouter = require("./restaurant");
const siteRouter = require("./site");
const createRouter = require("./createUser");
// Define a route for the all page
function router(app) {
  //route for restaurant
  app.use("/restaurant", restRouter);

  //route for site
  app.use("/", siteRouter);
  app.use("/", createRouter);
}
module.exports = router;
