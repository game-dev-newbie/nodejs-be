const express = require("express");
const morgan = require("morgan");
const path = require("path");
const hbs = require("express-handlebars");

const app = express();
const port = 8080;
//Template engine handlebars
//set extension file .hbs
app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
//Thư mục chứa file view
//__dirname: trả về đường dẫn tuyệt đối đến thư mục chứa file hiện tại
app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("combined"));
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
