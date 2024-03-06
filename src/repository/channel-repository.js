const Channel = require('../models/channel');

class ChannelRepository{
    async create(data){
        try {
            const response = await Channel.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Channel.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    async get(id){
        try {
            const response = await Channel.findById(id);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ChannelRepository;