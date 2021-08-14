const express = require('express')
const cityController = require('../controllers/cityController')

const router = express.Router()
router.route("/citiesData")
.get(cityController.getAllCities)
.post(cityController.addNewCity)

/router.route("/citiesData/:id")
.get(cityController.getCityId)
.delete(cityController.deleteCity)
.put(cityController.editCity)
module.exports=router

//token github