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
 },
 likeItinerary:(req,res) =>{
     Itinerary.findOne({_id: req.params.id})
     .then((itinerary) =>{
         if(itinerary.likes.includes(req.user._id)){
            Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
            .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
            .catch((error) => console.log(error))
         }else{
             Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
             .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
             .catch((error) => console.log(error))
         }
     })
     .catch((error) => res.json({success:false, response:error}))
 },
 addCommentPerItinerary: (req, res) =>{
     Itinerary.findOneAndUpdate({_id:req.params.id}, {$push:{comments :{comment:req.body.comment, userId: req.user._id}}}, {new:true})
     .then((newComment) => res.json({success:true , response:newComment.comments}))
     .catch((error) => res.json({success:false, response:error}))
    
 },
 deleteAComment : (req, res) => {
    Itinerary.findOneAndUpdate({"comments._id":req.params.id}, {$pull:{comments:{_id:req.params.id}}}, {new:true})
    .then((commentDeleted) => res.json({success:true, response:commentDeleted.comments}))
    .catch((error) => res.json({success:false, response:error}))
 },
 editAComment: (req, res) => {
     Itinerary.findOneAndUpdate({})
 }
} 

module.exports=itineraryController