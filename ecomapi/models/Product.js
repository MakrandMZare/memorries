const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: { type: String, required: true },
        categories: { type: Array },
        productname: { type: String, required: true},
        weight: { type: String, required: true},
        price: { type: Number, required: true}, 
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);