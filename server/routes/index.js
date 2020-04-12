import express from "express";

const router = express.Router();

router.get('/message', function(req, res, next) {
    res.json('Welcome To React');
});

export default router;