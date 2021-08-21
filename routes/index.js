const express = require('express')
const cityController = require('../controllers/cityController')
const itineraryController = require ('../controllers/itineraryController')

const router = express.Router()
router.route("/citiesData")
.get(cityController.getAllCities)
.post(cityController.addNewCity)

/router.route("/citiesData/:id")
.get(cityController.getCityId)
.delete(cityController.deleteCity)
.put(cityController.editCity)
module.exports=router

router.route("/itineraries")
.get(itineraryController.getAllItineraries)
.post(itineraryController.addNewItinerary)

router.route("/itineraries/:id")
.get(itineraryController.getItinerariesPerCity)


router.route("/itinerary/:id")
.get(itineraryController.getItineraryId)
.delete(itineraryController.deleteItinerary)
.put(itineraryController.editItinerary)