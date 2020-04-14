import express from "express";
import Rooms from "../repositories/RoomRepository"

const router = express.Router();

// create room
router.post('/', function (req, res) {
    Rooms.create(req.body.name).then(
        (room) => {
            res.status(201).json({
                id: room._id,
                name: room.name,
                keys: room.keys,
                messages: room.messages
            });
        }
    );
});

export default router;