const User = require('../models/users.model')


const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then((res) => res.json('Deleted correctly'))
    .catch((err) => console.log('No Deleted' + err))
}


const addUser = (req, res) => {
    User.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
}


module.exports = {
    addUser, deleteUser
}