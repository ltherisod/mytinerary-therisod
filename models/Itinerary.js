const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    authorName:{type:String, required:true},
    authorPhoto:{type:String, required: true},
    src:{type:String, required:true},
    hashtags:{type: Array, required: true},
    title:{type: String, required:true},
    price:{type: Number, required:true},
    likes:{type: Number, default:0},
    description:{type:String, required:true},
    time:{type:Number},
    comments: {type:Array},
    cityId:{type: mongoose.Types.ObjectId, ref:'city'}
})  

const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports=Itinerary