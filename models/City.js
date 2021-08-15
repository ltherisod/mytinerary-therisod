const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name:{type: String, required:true},
    country:{type: String, required: true},
    src:{type: String, required:true},
    background:{type: String, required:true},
    description:{type: String, required:true},
    map:{type:String},
    coin:{type:String},
    language: {type:String}
})

const City = mongoose.model('city',citySchema)

module.exports=City