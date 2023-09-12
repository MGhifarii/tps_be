module.exports = (app) => {
    const tps = require("../controllers/tpsController.js");
    const router = require("express").Router();

    router.post("/", tps.create);
    router.get("/", tps.findAll);
    router.get("/published", tps.findAllPublished);
    router.get("/:id", tps.findOne);
    router.put("/:id", tps.update);
    router.delete("/:id", tps.delete);
    router.delete("/", tps.deleteAll);

    app.use("/api/tps", router);
};



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