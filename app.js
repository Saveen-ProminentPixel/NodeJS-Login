const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homeRoutes = require("./routes/home");
const loginRoutes = require("./routes/login");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(loginRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "home.html"));
});

app.listen(3000);
