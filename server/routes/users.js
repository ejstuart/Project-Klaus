import express from "express";
import jwt from "jsonwebtoken";
import User from "../repositories/UserRepository"
import config from "../config";

const router = express.Router();

// create user
router.post('/', function (req, res) {
    User.create(req.body.name, req.body.room).then(
        (user) => {
            res.status(201).json({
                name: user.name,
                identityKey: user.keys,
                token: jwt.sign({
                    "sub": user._id,
                    "name": user.name
                }, config.SECRET)
            });
        }
    );
});

export default router;