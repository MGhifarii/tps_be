// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const {User} = require('../models');
// const Validator = require('fastest-validator');

// const v = new Validator();

// exports.login = async(req, res) => {
//     const schema = {
//         email : 'email',
//         password : 'string|min:6'
//     }
        
//     const validate = v.validate(req.body, schema);
        
//     if (validate.length){
//         return res.status(400).json(validate);
//     }

//     try {
//         var user = await User.scope('withPassword').findOne({
//             where:{
//                 email: req.body.email
//             }
//         });

//         if (!user){
//             return res.status(400).json({success: 'false', message: 'Email Tidak ditemukan'});
//         }
//         const match = await bcrypt.compareSync(req.body.password, user.password);
//         if(!match) return res.status(400).json({success: 'false', message: 'Password Salah'});
//         const userId = user.id;
//         const email = user.email;

//         const token = jwt.sign({userId, email}, process.env.API_SECRET, {
//             expiresIn: '86400s'
//         });

//         user = await User.findOne({
//             where:{
//                 email: req.body.email
//             }
//         });
        
//         res.json({success: 'true', response: user, token: token});
//     } catch (error) {
//         res.status(400).json({success: 'false', message: error});
//     }
// }

// exports.token = async(req, res) => {
//     res.json({success: true});
// }

const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken.js");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
// import models
const Admin = require("../models/userModel.js");
const { update } = require("../models/userModel.js");

// @desc    Register new admin
// @route   POST /api/v1/users
// @access  Public

exports.registerAdmin = asyncHandler(async (req, res) => {
  const { nama, username, password } = req.body;
  
  if (!nama || !username || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // Check if user exists
  const adminExists = await Admin.findOne({ username })

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create admin
  const admin = await Admin.create({
    nama,
    username,
    password: hashedPassword,
  });

  if (admin) {
    res.status(201).json({
      _id: admin.id,
      nama: admin.nama,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});

// @desc    Authenticate a user
// @route   POST /api/v1/users/login
// @access  Public
exports.loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Check for user username
  const admin = await Admin.findOne({ username })

  if (admin && (await bcrypt.compare(password, admin.password))) {
    res.json({
      _id: admin.id,
      nama: admin.nama,
      username: admin.username,
      token: generateToken(admin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc    Get user data
// @route   GET /api/v1/users/me
// @access  Private
exports.getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.admin);
});

// @desc    Get user data
// @route   PUT /api/v1/users/me
// @access  Private
exports.editProfile = asyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.admin._id)

  if (admin) {
    admin.nama = req.body.nama || admin.nama;
    admin.username = req.body.username || admin.username;
    await admin.save();
    const updatedAdmin = await Admin.findById(req.admin._id)
    res.json({
      _id: updatedAdmin._id,
      nama: updatedAdmin.nama,
      username: updatedAdmin.username,
      token: generateToken(updatedAdmin._id),
    });
  } else {
    res.status(404);
    throw new Error("Admin not found!");
  }
});

exports.checkTokenAuth = async (req, res) => {
  try {
    const adminId = req.user.id;

    const admin = await Admin.findOne({where: {id: adminId}});
    return res.status(200).json({
      success: true,
      message: "Admin authorized",
      data: admin,
    });
  } catch (error) {
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};