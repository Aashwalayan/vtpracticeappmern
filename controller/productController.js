const product = require('../models/product')
const jwt = require('jsonwebtoken')

const productController = {
    addProducts: async(req, res) =>{
        
        try{
            const {name, productDescription, salePrice, costPrice} = req.body;
            if (!name || !productDescription || !salePrice || !costPrice){
                return res.status(400).json({
                    status: 400,
                    message: "field empty",
                    data: null
                })
            }
            const newProduct = await product.create({name, productDescription, salePrice, costPrice});

            return res.status(201).json({
            status: 201,
            message: "product added succesfully",
            data:newProduct
        });
        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data:null
            });
        }
        
    },

    getProducts: async(req, res) =>{
        try{
            const allProduct = await product.find();

            return res.status(200).json({
                status: 200,
                message: "product details fetched succesfully",
                data: allProduct
            })
        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data:null
            });
        }
    },

    getProuctById: async(req, res) => {
        try{
            const id = req.params.id;
            const singleProductData = await product.findById(id);

            console.log(singleProductData);

            return res.status(200).json({
                status: 200,
                message: "Single prodict data fetched",
                data: singleProductData
            })
        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data: null
            })
        }
    },
    
}

module.exports = productController;