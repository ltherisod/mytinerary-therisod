import { useState } from "react"
import { connect } from "react-redux"
import itinerariesActions from "../redux/actions/itinerariesActions"
import toasty from "./Toast"

const Itinerary = (props) => {
const [shown, setShown] = useState(false)
const {authorName, authorPhoto, src, hashtags, title, price, likes, description, time, _id} = props.data
const [likeIcon, setLikeIcon] = useState(true)
const [itinerariesLikes, setItinerariesLikes] = useState(likes)


const likeItinerary = async ()=>{
    setLikeIcon(false)
    if(!props.token){
        toasty('error', 'You must be logged in to like this post')
    }else{
        props.likeItinerary(_id, props.token)
        // .then((response) => console.log(response))
        let response = await props.likeItinerary(_id, props.token)
        setItinerariesLikes(response.data.response.likes)
    }
    setLikeIcon(true)
}

console.log(itinerariesLikes)
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
            {shown && (
                <div className="commentsConstruction">
                     <h4>UNDER CONSTRUCTION</h4>
                <div className="textDeco"></div>
                    <img alt="icon" src="/assets/info3.gif"/>
                </div>
                )}
            </div>
          
            <div className="itinerarybutton">
                <button onClick={()=>setShown(!shown)}>{shown ? "View Less" : "View More"}</button>
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
    likeItinerary:  itinerariesActions.likeItinerary
}    

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary) 