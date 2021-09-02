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
 modifyComment: async (req, res) => {
     switch(req.body.type){
         case "addComment":
             try{
                 const newComment = await Itinerary.findOneAndUpdate({_id:req.params.id}, {$push:{comments :{comment:req.body.comment, userId: req.user._id}}}, {new:true}).populate("comments.userId")
                 if(newComment){
                    res.json({success:true , response:newComment.comments})
                 }else{
                     throw new Error()
                 }
             }catch (error){
                res.json({success:false , response:error})
             }
            
            break
        case "editComment" : 
            try{
                const updateComment = await Itinerary.findOneAndUpdate({"comments._id":req.params.id}, {$set:{"comments.$.comment": req.body.comment}},{new:true})
                if(updateComment){
                    res.json({success:true, response:updatedComment.comments})
                }else{
                    throw new Error()
                }
            }catch (error){
                res.json({success:false, response:error })
            }
            break
        case "deleteComment":
            try{
                const commentDeleted = await  Itinerary.findOneAndUpdate({"comments._id":req.body.commentId}, {$pull:{comments:{_id:req.body.commentId}}})
                if(commentDeleted){
                    res.json({success:true})
                }else {
                    throw new Error()
                }
            }catch (error){
                res.json({success:false, response:error})
            }
         break  
    }
 }
 
} 

module.exports=itineraryController