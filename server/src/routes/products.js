import express from "express";
import Product from "../models/Product.js"

const router = express.Router();

router.
    route('/')
    .get(async(req, res) => {
        try {
            const products = await Product.getAll();
            res.status(200).send(products)
        } catch(e) {
            console.error(e);
            res.status(500).send("There was a server issue getting products.")
        }
    })
    .post(async (req, res) => {
        try {
            await Product.addProduct(req.body.productName, req.body.price, req.body.productDesc, req.body.imgSrc)
            res.status(200).send("Product added successfully!");
        } catch(e) {
            res.status(500).send('There was an issue adding product.')
        }

    })

export default router