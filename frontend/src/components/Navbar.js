import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = () =>{
    return (
   
        <nav className="navBar">
            <div className="navbarContainer">
                <NavLink to= "/" className="logoIcon">
                    <img src="./assets/logo-unscreen.gif"/>
                    <p>Mytinerary</p>
                </NavLink>
                <div className="account">
                    <NavLink to= "/" >Home</NavLink>
                    <NavLink to = "/cities">Cities</NavLink>
                    <NavLink className="user" to = "/">
                    <img src= "./assets/person-circle.svg"/>
                    </NavLink>
                </div>
                
              
            </div>
        </nav>
       
    )
}

export default Navbar