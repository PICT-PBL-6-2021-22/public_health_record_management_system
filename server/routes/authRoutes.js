const { Router } = require("express");
const { admin_login } = require("../controllers/authControlllers");

const router = Router();

router.post("/login/admin", admin_login);

module.exports = router;
