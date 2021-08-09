import {NavLink} from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <div className = "container-fluid"style={{backgroundImage: `url('./assets/footerbanner.jpg')`}}>
                <div className="phraseNav">
                    <div className="nameContainer">
                                <h3>Mytinerary</h3>
                                <div className="bilboPhrase">
                                    <p>“It’s a dangerous business going out your door.You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.”</p>
                                    <p> — Bilbo Baggins</p>
                                </div>
                            </div>
                        <nav>
                                <NavLink to= "/" >Home</NavLink>
                                <NavLink to = "/cities">Cities</NavLink>
                                <NavLink to ="/">Sign up</NavLink>
                                <NavLink to = "/">Log in</NavLink>
                        </nav>
                </div>
                        
                <div className="finalContent">
                    <div className = "socialMedia">
                        <img src="./assets/icons8-facebook-nuevo-96.png" alt="facebook"/>
                        <img src="./assets/icons8-instagram-96.png" alt="instagram"/>
                        <img src="./assets/icons8-twitter-cuadrado-96.png" alt="twitter"/>  
                    </div>
                    <span> Copyright &copy; Laura Therisod | Mytinerary | MindHub | 2021 </span>
                    </div>
            </div>
            
        </footer>
    )
}

export default Footer