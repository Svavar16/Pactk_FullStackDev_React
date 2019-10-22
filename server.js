const express = require('express');
const bodyParser = require('body-parser');
import users from "./mocks/users";
const PORT = 4000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/v1/users', (req, res) => {
    res.send(users);
});

app.get('/v1/users/:id', (req, res) => {
    res.status(200).end();
});

app.post('/v1/users', (req, res) => {
    res.status(200).end();
});

app.put('/v1/users/:id', (req, res) => {
    res.status(200).end();
});

app.delete('/v1/users/:id', (req, res) => {
    res.status(200).end();
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
