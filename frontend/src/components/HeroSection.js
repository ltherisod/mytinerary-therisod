import { Link } from "react-router-dom"
const HeroSection = () =>{
    return(
        <div className="heroContainer">
            <video className="mainVideo" src = "/assets/Header.mp4" autoPlay loop muted />
            <h1>Mytinerary</h1>
            <div>
                <h3>Find your perfect trip,</h3>
                <h3>designed by insiders who know and love their cities!</h3>
            </div>
            <div className= "heroButtons">
                <Link to= "/cities">
                <button>GET STARTED</button>
                </Link>
               

            </div>
        </div>
    )
} 

export default HeroSection