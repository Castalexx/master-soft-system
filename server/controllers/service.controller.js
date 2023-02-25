const Service = require('../models/service.model')

const addService = (req, res) => {
    Service.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => console.log(err))
}




module.exports = {
    addService
}