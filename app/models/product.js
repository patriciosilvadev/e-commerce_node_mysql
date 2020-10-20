module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        name: {
            type: Sequelize.STRING,
            required: true,
        },
        price: {
            type: Sequelize.BIGINT,
            required: true,
        },
        description: {
            type: Sequelize.STRING,
            required: false,
        },
        imageUrl: {
            type: Sequelize.STRING,
            required: false,
        },
    });

    return Product;
};
