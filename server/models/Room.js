import {Schema, model} from "mongoose";
import { customAlphabet } from 'nanoid'
import config from "../config";

const nanoid = customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890", 12);

const roomSchema = new Schema({
    _id: {
        type: String,
        default: () => nanoid()
    },
    name: {
        type: String,
        required: true
    },
    keys: [String],
    messages: [String]
}, {timestamps: true});

const Room = model('Room', roomSchema);

export default Room;