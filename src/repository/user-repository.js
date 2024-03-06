const User = require('../models/user');

class UserRepository{
    async create(data){
        try {
            const response = await User.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await User.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    async get(id){
        try {
            const response = await User.findById(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;