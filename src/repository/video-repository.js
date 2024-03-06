const Video = require('../models/video');

class VideoRepository{
    async create(data){
        try {
            const response = await Video.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async get(data){
        try {
            const response = await Video.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = VideoRepository;