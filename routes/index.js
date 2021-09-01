const express = require('express')
const cityController = require('../controllers/cityController')
const itineraryController = require ('../controllers/itineraryController')
const userController = require ('../controllers/userController')
const activityController = require ('../controllers/activityController')
const passport = require('passport')
const router = express.Router()
const validator = require('../controllers/validator')

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

router.route("/itinerary/like/:id")
.put(
    passport.authenticate('jwt', {session:false}),
    itineraryController.likeItinerary
    )

router.route("/itinerary/comments/:id")
.post(
    passport.authenticate('jwt', {session:false}),
    itineraryController.addCommentPerItinerary
    )    

router.route("/user/signup")
.post(validator,userController.addNewUser)

router.route("/user/signin")
.post(userController.logInUser)

router.route("/user/:id")
.delete(userController.deleteUser)
.put(userController.editUser)

router.route ("/verifyToken")
.get(
    passport.authenticate('jwt', {session:false}),
    userController.verifyToken
    )

router.route('/activities/:id')
.get(activityController.getActivitiesPerItinerary)

router.route('/activities')
.post(activityController.addNewActivities)

router.route('/activity/:id')
.get(activityController.getOneActivity)
.delete(activityController.deleteActivity)
.put(activityController.editActivity)