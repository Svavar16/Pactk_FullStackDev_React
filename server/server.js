import WithAdminPermission from "./middleware/WithAdminPermission";
import express from 'express';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import withAuthentication from "./middleware/withAuthentication";
import cors from 'cors';
import db from './db';
import getUsersRoutes from './routes/users';
import getProductRoutes from './routes/products';
import getAuthRoutes from './routes/auth';
import getOrders from './routes/orders';
require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(withAuthentication);
app.use(WithAdminPermission);
app.use(logger);

getUsersRoutes(app);
getProductRoutes(app);
getAuthRoutes(app);
getOrders(app);

app.listen(PORT, () => {
    console.log(`> Server is listening on port ${PORT}`);
});
