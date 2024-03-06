const LikeRepository = require('../repository/like-repository');
const VideoRepository = require('../repository/video-repository')

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.videoRepository = new VideoRepository();
    }

    async toggleLike(modelId, modelType, userId) { // /api/v1/likes/toggle?id=modelid&type=Tweet
        console.log(modelId, modelType, userId);
        if(modelType == 'Video') {
            var likeable = await this.videoRepository.get({_id : modelId}) ; //var has a functional scope
        // } else if(modelType == 'Comment') {
        //     var commentable = await this.commentRepository.find(modelId);
        } else {
            throw new Error('unknown model type');
        }
        const exists = await this.likeRepository.get({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        console.log("exists", exists);
        if(exists) {
            likeable.likes.pull(exists.id) || commentable.likes.pull(exists.id); 
            await likeable.save() || await commentable.save();
            await exists.deleteOne();
            var isAdded = false;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }   
}

module.exports = LikeService;