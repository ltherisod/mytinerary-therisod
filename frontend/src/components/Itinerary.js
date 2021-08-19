import { useState } from "react"

const Itinerary = (props) => {
const [shown, setShown] = useState(false)
const {authorName, authorPhoto, src, hashtags, title, price, likes, description, time, comments   } = props.data
    return(
        <div className="itineraryBody">
            <div className="itineraryHead">
                <div className="itineraryPhoto" style={{backgroundImage:`url('${src}')`}} ></div>
                <div className="itineraryData">
                    <div className="itineraryAuthor">
                        <img className="authorPhoto" src={authorPhoto} alt="photo"/>
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
                    <span className="hashtags">{hashtags.map((hashtag, index) =>{return (<p key={index}>#{hashtag}</p>)} )}</span>
                    <div className="itineraryIcons">
                    <span className="itineraryTime"><img src="/assets/sandclock-6090.svg" alt="clock icon"/>{time} hours</span>
                    <span className="itineraryPrice">{'💵'.repeat(parseInt(price))}</span>
                </div>
            </div>           
        </div>
            
            <div className="underConstruction">
            {shown && (
                <div className="">
                <h4>UNDER CONSTRUCTION</h4>
                <div className="textDeco"></div>
                <img src="/assets/backpack.gif" alt="bagpack"/>

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