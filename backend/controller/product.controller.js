import mongoose from "mongoose";
import Product from "../models/product.model.js";


export const getProduct = async (req, res) => {
    try {
        const products = await Product.find({}); // .find with empty object commands it to fetch all products

        res.status(200).json({ success: true, message: "successfully fetched all the products", data: products });
    } catch (error) {
        console.log("error: ", error.message);
        res.status(505).json({ success: false, message: "Server error" })
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;

    const newData = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, error: 'Invalid id' });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, newData, { new: true }); // new true is to get document after update, by default it gives document before update.
        res.status(200).json({ success: true, message: "Product updated!", updatedProduct: updatedProduct });
    } catch (error) {
        console.log("error: ", error);
        res.status(505).json({ success: false, message: "Server error!" })
    }
}

export const addProduct = async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({
            success: false,
            message: "Enter data in all fields"
        })
    }

    const newProduct = new Product(product); // creates new document

    try {
        await newProduct.save(); // saves this document to mongoDB database. it's a mongoose method
        res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log("error in creating product", error.message);
        res.status(501).json({ success: false, message: "server error" })
    }
}

export const delProduct = async (req, res) => {
    const { id } = req.params;


    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, error: 'Invalid id' });
    }


    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server error!" });
    }

}