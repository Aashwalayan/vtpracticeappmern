const user = require('../models/user')
const jwt = require('jsonwebtoken')

const UserController = {
    createUser: async(req, res) =>{
        
        try{
            const {name, age, email, password} = req.body;
            if (!name || !age || !email || !password){
                return res.status(400).json({
                    status: 400,
                    message: "field empty",
                    data: null
                })
            }
            const newUser = await user.create({name, age, email, password});

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
            const {name, age, email, password} = req.body;

            const updatedUserData = await user.findByIdAndUpdate(id, {name, age, email, password}, {new: true});
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
    },

    deleteUser: async(req, res) => {
        try{
            const id = req.params.id;

            const deletedUserData = await user.findByIdAndDelete(id);
            console.log(deletedUserData);

            return res.status(200).json({
                status: 200,
                message: "Single user data deleted",
                data: deletedUserData
            })

        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data: null
            })
        }
    },

    loginUser: async (req, res) =>{
        try{
            const {email, password} = req.body;

            if (!email || !password){
                return res.status(400).json({
                    status: 400,
                    message: "email or password not filled",
                    data: null
                })
            }

            const emailCheck = await user.findOne({email})

            if (!emailCheck){
                return res.status(400).json({
                    status: 400,
                    message: "Email not filled",
                    data: null
                })
            }

            if (emailCheck.password !== password){
                
                return res.status(400).json({
                    status: 400,
                    message: "Password Doesn't Match",
                    data: null
                })
            }

            const tokenData = jwt.sign(
                {id:emailCheck.id, email:emailCheck.email},
                process.env.JWT_TOKEN,
                { expiresIn: '7d'}
            );

            return res.status(200).json({
                status: 200,
                message: 'user data get succesfully',
                data:{
                    name: emailCheck.name,
                    email: emailCheck.email,
                    age: emailCheck.age,
                }
            })


        }catch(error){
            return res.status(400).json({
                status: 400,
                message: error,
                data: null
            })
        }
    },
    
}

module.exports = UserController;