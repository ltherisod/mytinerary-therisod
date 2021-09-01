const Activity = require ('../models/Activity')

const activityController ={
    getActivitiesPerItinerary : (req, res) => {
        Activity.find({itineraryId: req.params.id})
        .then((activities) => res.json({success:true, response: activities}))
        .catch((error) => res.json ({success:false, response:error.message}))
    },
    editActivity : (req, res) => {
        Activity.findOneAndUpdate({_id:req.params.id}, {...req.body})
        .then(() => res.json ({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    addNewActivities : (req, res) => {
        const newActivities = new Activity ({...req.body})
        newActivities.save()
        .then(() => res.json({success:true}))
        .catch((error) => res.json({success:false, response:error}))
    },
    deleteActivity :(req, res) =>{
        Activity.findOneAndDelete({_id:req.params.id})
        .then(() =>res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    getOneActivity : (req, res) =>{
        Activity.findOne({_id:req.params.id})
        .then((activity) => res.json({success:true, response:activity}))
        .catch((error) => res.json({success:false, response:error.message}))
    }

        
}

module.exports=activityController
