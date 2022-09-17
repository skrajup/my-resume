const express = require("express");
const app = express();

const home__routes = require("./routes/home__routes")

app.set("view engine", "ejs");
app.use(express.static("public"));

// routes
app.use("/", home__routes);

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Server started");
});