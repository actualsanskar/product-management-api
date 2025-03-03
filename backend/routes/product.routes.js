import express from "express";
const router = express.Router();
import { getProduct, updateProduct, addProduct, delProduct } from "../controller/product.controller.js";


router.get('/', getProduct)
router.put('/:id', updateProduct)
router.post('/', addProduct)
router.delete('/:id', delProduct)

export default router;