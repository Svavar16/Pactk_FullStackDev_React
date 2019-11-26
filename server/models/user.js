import mongoose, {Schema} from "mongoose";

export const UserSchema = new Schema({
    email: String,
    username: String,
    role: String,
});

export const userModel = mongoose.model('User', UserSchema);