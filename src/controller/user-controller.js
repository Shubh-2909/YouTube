const UserService = require('../services/user-service');

const userService = new UserService();

export const login = async(req,res) => {
    try {
        const response = await userService.Login({
            email: req.body.email,
            name: req.body.email,
            password : req.body.email
        })
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create a user',
            data: {},
            err:error
        })
    }
}

