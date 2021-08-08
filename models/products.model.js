const Sequelize = require("sequelize");
const { sequelize } = require("../database/database");

const ProductModel = sequelize.define('products', {
    name: {
        type: Sequelize.TEXT,
    }
},{
    timestamps: false
});

module.exports = ProductModel;