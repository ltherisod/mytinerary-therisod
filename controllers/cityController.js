const City = require('../models/City')
const cityController ={
    getAllCities:  (req, res) => {
        City.find()
        .then((cities)=>res.json({success:true, answer:cities}))
        .catch((error) =>res.json({success:false, answer:error}))
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
            language:req.body.langage
        })
        newCity.save()
        .then(()=>res.json({success:true}))
        .catch((error) => res.json({success:false, answer:error}))
    },
    getCityId: (req, res) => {
        City.findOne({_id:req.params.id})
        .then((city) => res.json({success:true, answer:city}))
        .catch((error) => res.json({success:false, answer:error}))
     },

     deleteCity :(req, res) =>{
         City.findOneAndDelete({_id:req.params.id})
         .then(() =>res.json({success:true}))
         .catch((error) => res.json({success:false, answer:error}))
     },

     editCity:(req, res) =>{
         City.findOneAndUpdate({_id:req.params.id}, {...req.body})
         .then(() => res.json({success:true}))
         .catch((error) => res.json({success:false, answer:error}))
     }
}

module.exports= cityController

