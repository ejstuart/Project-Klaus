import {model, Schema} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    room: {
        type: String,
        ref: 'Room',
        required: true
    },
    identityKey: String
}, {timestamps: true});

const User = model('User', userSchema);

export default User;