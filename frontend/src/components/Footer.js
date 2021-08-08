import {NavLink} from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className = "containerFooter"style={{backgroundImage: `url('./assets/footerbanner.jpg')`}}>
                <h3>Mytinerary</h3>
                <div>
                    <p>“It’s a dangerous business going out your door.</p>
                    <p> You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.”</p>
                    <p> — Bilbo Baggins</p>
                </div>
                <div className = "socialMedia">
                    <img src="./assets/icons8-facebook-nuevo-96.png" alt="facebook"/>
                    <img src="./assets/icons8-instagram-96.png" alt="instagram"/>
                    <img src="./assets/icons8-twitter-cuadrado-96.png" alt="twitter"/>  
                </div>
                <div>
                        <NavLink to= "/" >Home</NavLink>
                        <NavLink to = "/cities">Cities</NavLink>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer