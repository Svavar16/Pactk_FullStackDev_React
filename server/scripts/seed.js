import mongoose from "mongoose";
import {userModel} from "../../client/src/models/user";
import {productModel} from "../../client/src/models/product";
import {products, users} from "./data";

mongoose.connect("mongodb://localhost:27017/packtMERNstackDB", {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('open', () => {
    console.log('> Connected to database');
    userModel.insertMany(users, (error) => {
        if(error) {
            console.error(error);
        }else{
            console.log('> Users was inserted')
        }
    });
    productModel.insertMany(products, (error)=>{
        if(error){
            console.error(error);
        } else {
            console.log('> Products was inserted')
        }
    })
});