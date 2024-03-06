const UserRepository = require('../repository/user-repository');

class  UserService {
    constructor(){
        this.userrepository = new UserRepository();
    }

    async Login(data){
        try {
            const response = await this.userrepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UserService;