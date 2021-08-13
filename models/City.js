const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name:{type: String, required:true},
    country:{type: String, required: true},
    src:{type: String, required:true},
    description:{type: String, required:true}
})

const City = mongoose.model('city',citySchema)

module.exports=City