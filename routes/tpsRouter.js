var express = require('express');
var router = express.Router();
const {
    store,
    update,
    index,
    show,
    getByCategory,
    destroy
  } = require('../controllers/tpsController');
const {verifyToken} = require('../middleware/authJWT');
const { authMiddleware } = require('../middleware/authMiddleware');

// Get All
router.get('/', index);
// Get By Kategori
// router.get('/get-by-category/:category', getByCategory);
// Get by id
router.get('/:id', show);
// Store
router.post('/',authMiddleware, store);
// Update
router.put('/:id',authMiddleware, update);
//delete
router.delete('/:id',authMiddleware, destroy);

module.exports = router;


/*
const express = require("express");
// import controllers
const productController = require("../controllers/productController.js");
const {getProduct, getProductById, saveProduct, updateProduct, deleteProduct} = require("../controllers/productController");
const router = express.Router();

router.get("/", productController.getProduct);
router.get("/:id", productController.getProductById);
router.post("/", productController.setProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);


module.exports = router;
*/