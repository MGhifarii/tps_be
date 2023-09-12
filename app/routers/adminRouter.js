const express = require("express");
// import controllers
const adminController = require("../controllers/adminController.js");

// import middleware
const { auth } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/me", auth, adminController.getMe);
router.put("/me", auth, adminController.editProfile);


module.exports = router;
