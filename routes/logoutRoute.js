const Router = require("express");

const router = Router();

router.get("/logout", (req, res) => {
  res
    .clearCookie("jwt")
    .status(204)
    .json({ message: "Logged out successfully" });
});

module.exports = router;
