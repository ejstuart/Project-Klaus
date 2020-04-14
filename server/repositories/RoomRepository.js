import Room from "../models/Room";

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

    findAll(){
        return this.model.find();
    }

    deleteById(id){
        return this.model.findByIdAndDelete(id);
    }

    updateById(id, object){
        const query = {_id:id};
        return this.model.findOneAndUpdate(query, {$set: {name: object.name, keys: object.keys, messages: object.messages}});
    }
}

export default new RoomRepository(Room);