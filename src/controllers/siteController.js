const db = require("../config/database");
//define controller for home page
const Services = require("../services/CRUDServices");
const services = new Services();
class Site {
  //[GET] /home
  async getHomePage(req, res) {
    try {
      //get list user by services function
      const user = await services.getAllUsers();
      console.log("User data:", user);
      //  res.render(JSON.stringify(result));
      // })();
      res.render("home", {
        title: "Home Page",
        users: user,
      });
    } catch (err) {
      console.error("DB error:", err);
      return res.status(500).send("Internal Server Error");
    }
  }

  //[GET] /about
  getAboutPage = (req, res) => {
    return res.render("about", { title: "About Page" });
  };
}
module.exports = Site;
