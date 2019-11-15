import mongoose from "mongoose";
import {userModel} from "../models/user";
import {productModel} from "../models/product";
import {products, users} from "./data";

mongoose.connect("mongodb://localhost:27017/packtMERNstackDB", {useNewUrlParser: true, useFindAndModify: false});

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('open', () => {
    console.log('> Connected to database');
    userModel.insertMany(users, (error) => {
        if(error) {
            console.error(error);
        }
    });
    productModel.insertMany(products, (error)=>{
        if(error){
            console.error(error);
        }
    })
});