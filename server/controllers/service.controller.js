const Service = require('../models/service.model')

const getServices = (req, res) => {
    Service.find()
    .then((response) => res.json(response))
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
    Service.findByIdAndUpdate(req.params.id, { $set: {"description": req.body.description}})
    .then((response) => {
        res.json(response);
    })
    .catch(res.json('No Updated'))
}

const deleteService = (req, res) => {
    Service.findByIdAndDelete(req.params.id)
    .then(res.json('Deleted Correctly'))
    .catch((err) => res.json('No Deleted' + err))
}


module.exports = {
    getServices, getOneService, addService, editService, deleteService
}