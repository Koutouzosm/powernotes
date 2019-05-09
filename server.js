// import dependencies
var express = require("express");
var apiRoutes = require("./routes/api.js");
var htmlRoutes = require("./routes/html.js");

var app = express();
var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log("You are on Port: " + PORT)
});