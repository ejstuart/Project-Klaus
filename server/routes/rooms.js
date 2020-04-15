import express from "express";
import Room from "../repositories/RoomRepository"

const router = express.Router();

// create room
router.post('/', function (req, res) {
    Room.create(req.body.name).then(
        (room) => {
            res.status(201).json({
                id: room._id,
                name: room.name,
                locked: room.locked,
                keys: room.keys,
                messages: room.messages,
                users: []
            });
        }
    );
});

// get room
router.get('/:roomId', function (req, res) {
    Room.findById(req.params.roomId).then(room => {

        if (room == null) return res.status(404).json({error: true, message: "Room not found"});

        Room.findUsers(room._id).then(users => {
            res.json({
                id: room._id,
                name: room.name,
                locked: room.locked,
                keys: room.keys,
                messages: room.messages,
                users: users.map(user => ({
                    id: user.id,
                    name: user.name,
                    identityKey: user.identityKey
                }))
            });
        });
    });
});

router.post('/:roomId/lock', function (req, res) {
    Room.findById(req.params.roomId).then(room => {

        if (room == null) return res.status(404).json({error: true, message: "Room not found"});

        Room.findUsers(room._id).then(users => {
            if (users.length < 3){
                return res.status(400).json({
                    error: true,
                    message: "A room must contain at least 3 members to be locked"
                });
            }
            room.locked = true;
            room.save().then(updatedRoom => {
                res.status(200).json({
                    id: updatedRoom._id,
                    name: updatedRoom.name,
                    locked: updatedRoom.locked,
                    keys: updatedRoom.keys,
                    messages: updatedRoom.messages,
                    users: users.map(user => ({
                        id: user.id,
                        name: user.name,
                        identityKey: user.identityKey
                    }))
                })
            });
        });
    });
})

export default router;