const user = require('../models/user')

const UserController = {
    createUser: async(req, res) =>{
        
        try{
            const {name, age, email} = req.body;
            if (!name || !age || !email){
                return res.status(400).json({
                    status: 400,
                    message: "field empty",
                    data: null
                })
            }
            const newUser = await user.create({name, age, email});

            return res.status(201).json({
            status: 201,
            message: "user data created succesfully",
            data:newUser
        });
        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data:null
            });
        }
        
    },

    getUser: async(req, res) => {
        try{
            const users = await user.find();

            return res.status(200).json({
                status: 200,
                message: "users fetched succesfully",
                data:users
            });
        }catch(error){
            return res.status(500).json({
                status: 500,
                message: error,
                data: null
            });
        }
    },

    getUserById: async(req, res) => {
        
        try{
            const id = req.params.id;
            const singleUserData = await user.findById(id);

            console.log(singleUserData);

            return res.status(200).json({
                status: 200,
                message: "Single user data fetched",
                data: singleUserData
            })
        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data: null
            })
        }
    },

    updateUser: async(req, res) => {
        try{
            const id = req.params.id;
            const {name, age, email} = req.body;

            const updatedUserData = await user.findByIdAndUpdate(id, {name, age, email}, {new: true});
            console.log(updatedUserData);

            return res.status(201).json({
                status: 201,
                message: "Single user data updated",
                data: updatedUserData
            })

        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data: null
            })
        }
    }
}

module.exports = UserController;