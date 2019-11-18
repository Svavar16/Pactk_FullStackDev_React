import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import isAuthenticated from "./middleware/isAuthenticated";
import {userModel} from './models/user';
import {productModel} from "./models/product";
import db from './db';
import getUsersRoutes from './routes/users';
import getProductRoutes from './routes/products';
const PORT = process.env.PORT || 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(isAuthenticated);
app.use(logger);

getUsersRoutes(app);
getProductRoutes(app);

app.listen(PORT, () => {
    console.log(`> Server is listening on port ${PORT}`);
});
