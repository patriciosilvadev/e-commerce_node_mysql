const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");

router.post("/add-product", productController.addProduct);

router.put("/update-product/:id", productController.updateProduct);

router.delete("/delete-product/:id", productController.deleteProduct);

router.delete("/delete-all-products", productController.deleteAllProducts);

router.get("/product/:id", productController.findSingleProduct);

router.get("/products", productController.findAllProducts);

module.exports = router;
