const express = require('express')
const cityController = require('../controllers/cityController')

const router = express.Router()
router.route("/citiesData")
.get(cityController.printAllCities)

router.route("/citiesData/:id")
.get(cityController.printCityId)

module.exports=router