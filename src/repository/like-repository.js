const Like = require('../models/like');

class LikeRepository{
    async create(data){
        try {
            const response = await Like.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async get(data){
        try {
            const response = await Like.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = LikeRepository;