import { useState } from "react"

const Itinerary = (props) => {
const [shown, setShown] = useState(false)
const {authorName, authorPhoto, src, hashtags, title, price, likes, description, time} = props.data
    return(
        <div className="itineraryBody">
            <div className="itineraryHead">
                <div className="itineraryPhoto" style={{backgroundImage:`url('${src}')`}} ></div>
                <div className="itineraryData">
                    <div className="itineraryAuthor">
                        <img className="authorPhoto" src={authorPhoto} alt="authorPhoto"/>
                        <span className="authorName">{authorName}</span>
                    </div>
                    <div className="itineraryTitle">
                            <h2>{title}</h2>
                        <div className="likes">
                           <img src="/assets/instagram-like-3507.svg" alt="likeinsta"/>
                           <p>{likes}</p>
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

export default Itinerary