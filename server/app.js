const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const app = express();

dotenv.config({ path: "./config.env" });

const dbURI = process.env.DATABASE;
const port = 5000;

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to db and listening at port 5000");
  })
  .catch((err) => console.log(err));
app.listen(3000);

app.get("/", (req, res) => res.send("server listening at 3000 port!"));
