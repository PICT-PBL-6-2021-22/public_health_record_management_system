const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const registerRoute = require("./routes/registerRoute");
const doctorRoute = require("./routes/doctorRoute");
const adminRoutes = require("./routes/adminRoutes");
// const { requireAdminAuth } = require("./middlewares/adminAuthMiddleware");
const logoutRoute = require("./routes/logoutRoute");
const { requireAdminAuth } = require("./middlewares/adminAuthMiddleware");
const app = express();

dotenv.config({ path: "./config.env" });

// middlewares
app.use(express.json());
app.use(cookieParser());

const dbURI = process.env.DATABASE;
const port = 5000;

mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(port);
    console.log("connected to db and listening at port 5000");
  })
  .catch((err) =>
    res.send(
      "Something Went Wrong! Please Try again after some time, if problem persists please contact us."
    )
  );
app.get("/", (req, res) => res.send("server listening at 5000 port!"));
app.use(authRoutes);
app.use(registerRoute);
app.use(doctorRoute);
app.use(adminRoutes, requireAdminAuth);
app.use(logoutRoute);
