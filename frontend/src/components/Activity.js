// import { useEffect, useState } from "react"
import { connect } from 'react-redux'
import itinerariesActions from "../redux/actions/itinerariesActions"
import Carousel from 'react-bootstrap/Carousel'


const Activity = (props) => {
    return (
        <Carousel className="carrouselActivities carousel-fade">
            {props.activities.map(activity => {
                return ( 
                    <Carousel.Item interval={3500} className="photoAContainer" key={activity._id}>
                            <div  className="activityPhoto" alt="" style={{backgroundImage:`url("${activity.photo}")`}} />
                        <Carousel.Caption className="caption">
                            <p>{activity.name}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )})}       
        </Carousel>
    )
}
const mapDispatchToProps = {
    getActivitiesPerItinerary: itinerariesActions.getActivitiesPerItinerary
}

export default connect(null, mapDispatchToProps)(Activity)