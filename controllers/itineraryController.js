const Itinerary = require('../models/Itinerary')

const itineraryController ={
getAllItineraries: (req, res) => {
    Itinerary.find()
    .then((allItineraries) => res.json ({success:true, response:allItineraries}))
    .catch((error) => res.json ({success:false, response:error}))
},
addNewItinerary : (req, res) => {
    const newItinerary = new Itinerary ({...req.body})
    newItinerary.save()
    .then(() => res.json({success:true}))
    .catch((error) => res.json({success:false, response:error}))
},
getItineraryId: (req, res) => {
    Itinerary.findOne({_id:req.params.id})
    .then((itinerary) => res.json({success:true, response:itinerary}))
    .catch((error) => res.json({success:false, response:error.message}))
 },

 deleteItinerary :(req, res) =>{
     Itinerary.findOneAndDelete({_id:req.params.id})
     .then(() =>res.json({success:true}))
     .catch((error) => res.json({success:false, response:error.message}))
 },

 editItinerary:(req, res) =>{
     Itinerary.findOneAndUpdate({_id:req.params.id}, {...req.body})
     .then(() => res.json({success:true}))
     .catch((error) => res.json({success:false, response:error.message}))
 },
 getItinerariesPerCity : (req, res)=> {
     Itinerary.find({cityId: req.params.id })
     .then((itineraries) => res.json ({success:true, response:itineraries}))
     .catch ((error) => res.json ({success:false, response:error}))
 }
}

module.exports=itineraryController