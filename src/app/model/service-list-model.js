// Service List model which expose the schema of service with it's respective fields

const mongoose = require('mongoose');

const ServiceListSchema = mongoose.Schema({
    serviceID: Number,
    serviceType: String,

}, {
    timeStamps: true
});

module.exports = mongoose.model('ServiceList', ServiceListSchema);