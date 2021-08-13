const express = require('express')
const cityController = require('../controllers/cityController')

const router = express.Router()
router.route("/citiesData")
.get(cityController.printAllCities)
.post(cityController.addNewCity)

// router.route("/citiesData/:id")
// .get(cityController.addNewCity)

module.exports=router