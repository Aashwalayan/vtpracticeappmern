const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        name:{
            type: String,
            required: true,
            unique: true
        },
        productDescription:{
            type: String,
            required: true,
        },
        salePrice:{
            type:Number,
            required: true
        },
        costPrice: {
            type: Number,
            required: true,
        }
    },
    {
    timestamps: true
    }

);

const product = mongoose.model('product', productSchema);

module.exports = product;