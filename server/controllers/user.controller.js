const User = require('../models/users.model')

const addUser = (req, res) => {
    User.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
}


module.exports = {
    addUser
}