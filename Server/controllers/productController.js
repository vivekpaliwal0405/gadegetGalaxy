const fs = require('fs');
const path = require('path');
const Product = require("../models/productModels");

const productController = {
    async index(req, res, next) {
        try {
            const categories = await Product.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ error: "Server error", serverError: error });
        }
    },

  
    async update(req, res, next) {
        try {
          const { id } = req.params;
          const { productName, description, price, category } = req.body;

          console.log(id)
      
          const updateData = { productName, description, price, category };
      
          if (req.file) {
            updateData.img = '/uploads/products/img/' + req.file.filename
          }
      
          const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
          console.log(updatedProduct)
      
          if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
          }
      
          res.status(200).json(updatedProduct);
        } catch (error) {
          res.status(500).json({ error: "Error while updating product", serverError: error });
        }
      },
      
      async search(req, res, next) {
        let categories;
        try{
            const{id} = req.params
            categories = await Product.findById({_id: id});
        }catch(error){
            res.status(404).json({error: "server error" , serverError : "error"})


        }
        res.status(200).json(categories);
    },

    async store(req, res, next) {
        try {
            const { productName, description, price, category,img } = req.body;
            const newProduct = await Product.create({
                productName,
                description,
                price,
                category,
                img: "/uploads/products/img/" + req.file.filename, 
            });
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).json({ error: "Error while creating product", serverError: error });
        }
    },

    async delete(req, res, next) {
        try {
            const { id } = req.params;
            const deletedProduct = await Product.findByIdAndDelete(id);
            if (!deletedProduct) {
                return res.status(404).json({ error: "Product not found" });
            }
            res.status(200).json(deletedProduct);
        } catch (error) {
            res.status(500).json({ error: "Error while deleting product", serverError: error });
        }
    },
};

module.exports = productController;
