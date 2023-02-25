const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"]
    },
    business: {
      type: Boolean,
      required: [true, 'business is required']
    },  
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"]
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: {
        validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email"
      } 
    },
    collaborator: {
      type: Boolean,
      required: [true, `It's a collaborator?`]
    }
}, {timestamps: true})

// Password encrypted
UserSchema.pre('save', async function(next){
  try{
    const hashedPassword = await bcrypt.hash(this.password, 10)
    this.password = hashedPassword
  }catch{
    console.log('Error at save user')
  }
})



const User = mongoose.model('users', UserSchema);

module.exports = User