// const jwt = require("jsonwebtoken");
// const asyncHandler = require("express-async-handler");

// // import models
// const Admin = require("../models/userModel.js");

// const auth = asyncHandler(async (req, res, next) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       // Get token from header
//       token = req.headers.authorization.split(" ")[1];
//       if (!token) {
//         res.status(401);
//         throw new Error("Not authorized, no token");
//       }
//       // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Get user from the token
//       req.admin = await Admin.findById(decoded.id).select("-password");
      
//       console.log(req.admin)

//       next();
//     } catch (error) {
//       console.log(error);
//       res.status(401);
//       throw new Error("Not authorized");
//     }
//   }


// });

// module.exports = { auth };


const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_SECRET;

exports.authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    const decodedToken = jwt.verify(token, secret);
console.log(decodedToken)
    req.user = decodedToken;

    next();
  } catch (error){
    console.error(error);
    return res.status(401).send({
      message: "Authentication failed",
    });
  }
};