import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import isAuthenticated from "./middleware/isAuthenticated";
import {userModel} from './models/user';
import {productModel} from "./models/product";
import db from './db';
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isAuthenticated);
app.use(logger);

app.get('/v1/users', async (req, res) => {
    const users = await userModel.find() || [];
    res.send(users);
});

app.get('/v1/users/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        if(user){
            res.send(user);
        } else {
            res.status(404).end();
        }
    } catch (e) {
        res.status(404).end();
    }
});

app.post('/v1/users', (req, res) => {
    // TODO: implement
    res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
    res.status(200).end();
});

app.delete('/v1/users/:id', (req, res) => {
    res.status(200).end();
});

app.get('/v1/products', async (req, res) => {
   const products = await productModel.find() || [];
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
    const product = await productModel.create(req.body);
    if(product){
        res.status(200).end();
    } else {
        res.status(500).end();
    }
});

app.put('/v1/products/:id', async (req, res) => {
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
})

app.listen(PORT, () => {
    console.log(`> Server is listening on port ${PORT}`);
});
