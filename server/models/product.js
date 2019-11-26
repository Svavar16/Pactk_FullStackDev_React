import mongoose, {Schema} from "mongoose";

export const productSchema = new Schema({
    name: String,
    price: Number,
    images: [String],
    categories: [String],
});

export const productModel = mongoose.model('Product', productSchema);