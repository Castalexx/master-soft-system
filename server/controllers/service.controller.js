const Service = require('../models/service.model')
const User = require('../models/users.model')
const jwt = require('jsonwebtoken');
const SECRET = process.env.KEYJWT



const getServices = (req, res) => {
    const token = req.headers.user
    const user = jwt.verify(token, SECRET)
    User.findById(user._id)
    .then((response) => {   
        Service.find({idClient: user._id})
        .then((respon) => {
            res.json({user: response, services: respon})
        })
    })
}

const getOneService = (req, res) => {
    Service.findById(req.params.id)
    .then((response) => res.json(response))
}

const addService = (req, res) => {
    Service.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.json(err))
}

const editService = (req, res) => {
    console.log(req.params.id)
    Service.findByIdAndUpdate(req.params.id, {$set: {description: req.body.description}})
    .then((response) => res.json(response))
}

const deleteService = (req, res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(res.json('Deleted Correctly'))
    .catch((err) => res.json('No Deleted' + err))
}


module.exports = {
    getServices, getOneService, addService, editService, deleteService
}