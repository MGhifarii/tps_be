// var express = require('express');
// var router = express.Router();
// const {
//   login,
//   token
// } = require('../controllers/userController');
// const {verifyToken} = require('../middleware/authJWT');

// // Login
// router.post('/login', login);

// // Check Token
// router.get('/token', verifyToken, token);

// module.exports = router;


//ini jalan
const express = require("express");
// import controllers
const adminController = require("../controllers/userController.js");

// import middleware
const { auth, authMiddleware } = require("../middleware/authMiddleware.js");

const router = express.Router();
const {
    token
  } = require('../controllers/userController');
  const {verifyToken} = require('../middleware/authJWT');

router.post("/", adminController.registerAdmin);
router.post("/login", adminController.loginAdmin);
router.get("/me", authMiddleware, adminController.getMe);
router.put("/me", authMiddleware, adminController.editProfile);

// Check Token
router.get('/token', authMiddleware, adminController.checkTokenAuth);

module.exports = router;


// const express = require("express");
// import controllers
// const adminController = require("../controllers/userController.js");

// import middleware
// const { auth } = require("../middleware/authMiddleware.js");

// const router = express.Router();

// const {
//     loginAdmin,
//     token,
//     registerAdmin,
//     getMe,
//     editProfile
// } = require('../controllers/userController');
// const {verifyToken} = require('../middleware/authJWT')

// router.post("/", registerAdmin);
// router.post("/login", loginAdmin);
// router.get("/me", getMe);
// router.put("/me", editProfile);

// router.get('/token', verifyToken, token)


// module.exports = router;