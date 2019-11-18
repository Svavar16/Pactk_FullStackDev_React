import {productModel} from "../models/product";

export default (app) => {
    app.get('/v1/products', async (req, res) => {
        const {categories} = req.query;
        const categoriesList = categories ? categories.split(',') : [];
        const products = await productModel.find(
            categoriesList.length > 0 ?
                {categories: {$in: categoriesList}} : undefined
        ) || [];
        res.send(products);
    });

    app.get('/v1/products/:id', async (req, res) => {
        try {
            const product = await productModel.findById(req.params.id);
            if(product){
                res.send(product);
            } else {
                res.status(404).end();
            }
        } catch (e) {
            res.status(404).end();
        }

    });

    app.post('/v1/products', async (req, res) => {
        if(!req.isAdmin){
            return res.status(404).end();
        }
        const product = await productModel.create(req.body);
        if(product){
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });

    app.put('/v1/products/:id', async (req, res) => {
        if(!req.isAdmin){
            return res.status(404).end();
        }
        productModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            (err) => {
                if(err){
                    res.status(500).end();
                } else {
                    res.status(200).end();
                }
            }
        );
    });

    app.delete('/v1/products/:id', (req, res) =>{
        if(!req.isAdmin){
            return res.status(404).end();
        }
        productModel.findByIdAndDelete(
            req.params.id,
            (err) => {
                if(err){
                    res.status(500).end();
                } else {
                    res.status(200).end();
                }
            }
        )
    });
}
