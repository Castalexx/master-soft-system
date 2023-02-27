const User = require('../models/users.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const registerUser = async(req, res) => {
    try{
        const searchUser = await User.findOne({email: req.body.email})
        if(searchUser){
            res.json('El correo ya esta en uso')
        } else {
            const newUser = await User.create(req.body);
            const userToken = jwt.sign({_id:newUser._id}, process.env.KEYJWT)
            res.status(201).cookie({name:'userToken', val:userToken, httpOnly:true, expires: new Date(Date.now() + 90000)})
            .json({successMessage: "Registered User", user:newUser})
        }
    }catch{
        res.json('No se encontro')
    }
}



module.exports = {
    registerUser
}


/* const newUser = await User.create(req.body);
        console.log(newUser._id)
        const userToken = jwt.sign({_id:newUser._id}, process.env.KEYJWT)
        console.log(userToken)
        res.status(201).cookie('userToken', userToken, {httpOnly:true, expires: new Date(Date.now() + 90000)})
        .json({successMessage: "Registered User", user:newUser}) */