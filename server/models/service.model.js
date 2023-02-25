const mongoose = require('mongoose');



const ServiceSchema = mongoose.Schema({
    name: String,
    title: String,
    state: String,
    description: String,
    comments: [String]

}, {timestamps: true})

const Service = mongoose.model('services', ServiceSchema)

module.exports = Service;