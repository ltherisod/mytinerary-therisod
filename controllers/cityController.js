const City = require('../models/City')
const cityController ={
    getAllCities:  (req, res) => {
        City.find()
        .then((cities)=>res.json({success:true, response:cities}))
        .catch((error) =>res.json({success:false, response:error}))
    },
    addNewCity:  (req, res) => {
        const newCity = new City({
            name:req.body.name,
            country:req.body.country,
            src:req.body.src,
            background:req.body.background,
            description:req.body.description,
            map:req.body.map,
            coin:req.body.coin,
            language:req.body.language
        })
        newCity.save()
        .then(()=>res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    getCityId: (req, res) => {
        City.findOne({_id:req.params.id})
        .then((city) => res.json({success:true, response:city}))
        .catch((error) => res.json({success:false, response:error.message}))
     },

     deleteCity :(req, res) =>{
         City.findOneAndDelete({_id:req.params.id})
         .then(() =>res.json({success:true}))
         .catch((error) => res.json({success:false, response:error.message}))
     },

     editCity:(req, res) =>{
         City.findOneAndUpdate({_id:req.params.id}, {...req.body})
         .then(() => res.json({success:true}))
         .catch((error) => res.json({success:false, response:error.message}))
     }
}

module.exports= cityController

