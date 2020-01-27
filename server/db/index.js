require('dotenv').config();
import mongoose from "mongoose";

const DBLink = process.env.DB_URL;

mongoose.connect(DBLink, {useNewUrlParser: true, useFindAndModify: false,useUnifiedTopology:true});

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('open', () => {
    console.log('> Connected to database');
});

export default db;