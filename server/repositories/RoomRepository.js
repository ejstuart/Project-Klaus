import Room from "../models/Room";
import User from "../models/User";

class RoomRepository{
    constructor(model) {
        this.model = model;
    }

    create(name){
        const room = new this.model({
            name,
            keys: [],
            messages: []
        });

        return room.save();
    }

    findById(id){
        return this.model.findById(id);
    }

    findUsers(id){
        return User.find({"room": id});
    }

    updateById(id, object){
        const query = {_id:id};
        return this.model.findOneAndUpdate(query, {$set: {name: object.name, keys: object.keys, messages: object.messages}});
    }
}

export default new RoomRepository(Room);