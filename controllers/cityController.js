const City = require('../models/City')
/*const citiesData = [
    {src: '/assets/Cities/chileatacama.jpg', id: 'chilea', name: 'Atacama', country: 'Chile', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/CapeTown.jpg', id:'southAfricab', name: 'Cape Town', country:'South Africa',description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.' },
    {src: '/assets/Cities/DarwinAustralia.jpg', id: 'australiac', name: 'Darwin', country: 'Australia', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/HuayinWeinánChina.jpg', id: 'chinad',name: 'Huayin', country: 'China', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/AucklandNewZeland.jpg', id: 'newzelande', name: 'Auckland', country:'New Zeland', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/BavariaGermany.jpg', id: 'germanyf',name: 'Bavaria', country:'Germany', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/PhilippinesCoron.jpg', id: 'philippinesg',name: 'Coron', country:'Philippines', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/ShintoJapan.jpg', id: 'shintoh', name: 'Shinto', country:'Japan', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/SukhothaiThailand.jpg',id: 'thailandi',name: 'Sukhothain', country:'Thailand', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/TulumMexico.jpg',id: 'mexicoj',name: 'Tulum', country:'Mexico', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/VolcanThrihnukagigur.jpg', id: 'islandk', name: 'Hafnarfjordur', country:'Island', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'},
    {src: '/assets/Cities/ChaltenArgentinajpg.jpg',id: 'argentinal',name: 'El Chalten', country:'Argentina', description:'The purrr-fect lorem ipsum generator for clients who love their cats and cat memes. It’ll have your cat-loving clients purring their appreciation for your mock-ups in no time.'}
]*/

const cityController ={
    getAllCities:  (req, res) => {
        City.find()
        .then((cities)=>res.json({success:true, answer:cities}))
        .catch((error) => res.json({success:false, answer:error}))
    },
    addNewCity:  (req, res) => {
        const newCity = new City({
            name:req.body.name,
            country:req.body.country,
            src:req.body.src,
            description:req.body.description
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





// printAllCities:  (req, res) => {
//     City.find()
//     .then((cities)=>res.json({answer:cities}))
  
// },