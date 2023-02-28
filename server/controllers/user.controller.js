const User = require('../models/users.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET = process.env.KEYJWT

module.exports = {
    registerUser: async(req, res) => {
      try{
        const newUser = await User.create(req.body);
        console.log(newUser._id)
        const userToken = jwt.sign({_id:newUser._id}, SECRET)
        console.log(userToken)
        res.status(200).cookie('userToken', userToken, {httpOnly:true, expires: new Date(Date.now() + 90000)})
        .json({successMessage: "Registered User", user:newUser})
      }catch(error){
        
        res.status(404).json(error)
      }
    },
  
    loginUser: async (req, res)=>{
      const user = await User.findOne({email:req.body.email})
      if(!user){
          res.status(400).json({error: "Email no existe"})
          console.log('no existe ese usuario')
      }
      try{
          const passwordValida = await bcrypt.compare(req.body.password, user.password)
          if(!passwordValida){
              res.status(400).json({error: "Password incorrecto"})
          }else{
            const userToken = jwt.sign({_id:user._id}, SECRET)
            console.log(userToken)
            res.json({user: 'usuario logeado'}).status(200).cookie('userToken', userToken, {httpOnly:true, expires: new Date(Date.now() + 90000)} )
          }
  
      }catch(error){
        console.log(error)
      }
  }
  }