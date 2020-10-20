const db = require("../models");

const Product = db.products;

const genericErrorMessage = "Something went wrong!";

/** Add product */
exports.addProduct = (req, res) => {
    const { name, price, image, description } = req.body || {};

    if (!name || !price) {
        res.send({
            message: "Name and Price is required!",
        });
        return;
    }

    const product = {
        name,
        price,
        image,
        description,
    };

    Product.create(product)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};

/** Update product */
exports.updateProduct = (req, res) => {
    const productId = req.params.id;

    const updatedProduct = req.body || {};

    Product.update(updatedProduct, {
        where: { id: productId },
    })
        .then((count) => {
            if (count == 1) {
                res.send({
                    message: "Product updated successfully!",
                });
            } else {
                res.send({
                    message: `${genericErrorMessage} + Please check product id again.`,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};

/** Delete single product */
exports.deleteProduct = (req, res) => {
    const productId = req.params.id;

    Product.destroy({
        where: { id: productId },
    })
        .then((count) => {
            if (count == 1) {
                res.send({
                    message: "Product deleted successfully!",
                });
            } else {
                res.send({
                    message: `${genericErrorMessage} + Please check product id again.`,
                });
            }
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};

/** Find single product */
exports.findSingleProduct = (req, res) => {
    const productId = req.params.id;

    Product.findByPk(productId)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};

/** Find all products */
exports.findAllProducts = (req, res) => {
    Product.findAll({})
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};

/** Delete all products */
exports.deleteAllProducts = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false,
    })
        .then((count) => {
            const message = count < 2 ? "product" : "products";
            res.send({
                message: `${count} ${message} deleted successfully!`,
            });
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || genericErrorMessage,
            });
        });
};
