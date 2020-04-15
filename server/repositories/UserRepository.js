import User from "../models/User";

class UserRepository{
    constructor(model) {
        this.model = model;
    }

    create(name, room){
        const user = new this.model({
            name,
            room: room._id ? room._id : room,
            identityKey: null
        });

        return user.save();
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
        return this.model.findOneAndUpdate(query, {$set: {name: object.name, room: object.room, identityKey: object.identityKey}});
    }
}

export default new UserRepository(User);