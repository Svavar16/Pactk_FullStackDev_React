import {userModel} from "../models/user";

export default (app) => {
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
        if(!req.isAdmin){
            return res.status(404).end();
        }
        res.status(200).end();
    });

    app.delete('/v1/users/:id', (req, res) => {
        if(!req.isAdmin){
            return res.status(404).end();
        }
        res.status(200).end();
    });
}

