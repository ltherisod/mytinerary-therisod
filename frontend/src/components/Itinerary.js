import { useState } from "react"
import { connect } from "react-redux"
import Activity from "./Activity"
import itinerariesActions from "../redux/actions/itinerariesActions"
import Comments from "./Comments"
import toasty from "./Toast"



const Itinerary = (props) => {
const {authorName, authorPhoto, src, hashtags, title, price, likes, description, time, _id} = props.data
const [likeIcon, setLikeIcon] = useState(true)
const [itinerariesLikes, setItinerariesLikes] = useState(likes)
const [showActivities, setShowActivities]= useState([])
const [button, setButton] = useState(false)


const likeItinerary = async ()=>{
    setLikeIcon(false)
    if(!props.token){
        toasty('error', 'You must be logged in to like this post')
    }else{
        let response = await props.likeItinerary(_id, props.token)
        setItinerariesLikes(response.data.response)
    }
    setLikeIcon(true)
}
async function activityItinerary (){
    try{
        let response = await props.getActivitiesPerItinerary(_id)
        console.log(response)
        setShowActivities(response)
        console.log("fetcheo")

    }catch (error){
        console.log(error)
    }
}

console.log(showActivities)
const buttonHandler = () => {
        setButton(!button)
        console.log(showActivities.length)
        if(!button  && !showActivities.length){
            activityItinerary()
        }
    
}



    return(
        <div className="itineraryBody">
            <div className="itineraryHead">
                <div className="itineraryPhoto" style={{backgroundImage:`url('${src}')`}} ></div>
                <div className="itineraryData">
                    <div className="d-flex justify-content-between">
                            <div className="itineraryAuthor">
                                <img className="authorPhoto" src={authorPhoto} alt="authorPhoto"/>
                                <span className="authorName">{authorName}</span>
                            </div>    
                    <div className="adventure" style={{backgroundImage:`url('/assets/mini.png')`}}></div>
                    </div>
                    <div className="itineraryTitle">
                            <h2>{title}</h2>
                        <div onClick={(likeIcon ? likeItinerary : null )} className="likes">
                           <img src="/assets/instagram-like-3507.svg" alt="likeinsta"/>
                           <p>{itinerariesLikes.length}</p>
                        </div>
                    </div>
                    <p className="itineraryDescrip">{description}</p>
                    <span className="hashtags">{hashtags.map((hashtag, index) =><p key={index}>#{hashtag}</p>)}</span>
                    <div className="itineraryIcons">
                        <span className="itineraryTime"><img src="/assets/sandclock-6090.svg" alt="clock icon"/>{time} hours</span>
                        <span className="itineraryPrice">{[...Array(price)].map((cash, index) => {
                            return <img src="/assets/money-dollar-6362.svg" className="iconoBilletes" key={index} alt="money"/>
                        })}</span>
                </div>
            </div>           
        </div>
            
            <div className="underConstruction">
            {button && 
                <>
                    <div className="activitiesHeader">
                        <h2 className="activitiesTitle">Activities to do </h2>
                    </div>
                    <div className="activitiesSection">
                        <Activity activities={showActivities}/>
                        <div className="commentsConstruction">
                            <Comments/>
                        </div>    
                    </div>
                        
                       
                </>
                }
            </div>
          
            <div className="itinerarybutton">
                <button onClick={buttonHandler}>{!button  ? "View More" : "View Less"}</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        token:state.users.token
    }
}
const mapDispatchToProps ={
    likeItinerary:  itinerariesActions.likeItinerary,
    getActivitiesPerItinerary: itinerariesActions.getActivitiesPerItinerary
}    

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 