import express from "express";
import rooms from "./rooms";
import users from "./users";

const router = express.Router();

router.use('/rooms', rooms);
router.use('/users', users)

router.all("*", function (req, res) {
    res.status(404).end();
})

export default router;