const user = require('../models/user')

const UserCOntroller = {
    createUser: async(req, res) =>{
        
        try{
            const {name, age, email} = req.body;
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
        
    }
}

module.exports = UserCOntroller;