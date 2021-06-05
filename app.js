const express = require("express");
const app = express();
const path = require("path");
const route = require("./routes/app");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(route);

app.listen(3000, () => {
  console.log(`server started at 3000`);
});
