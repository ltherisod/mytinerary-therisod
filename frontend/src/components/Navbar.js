import React from "react"
import {NavLink} from "react-router-dom"

const Navbar = () =>{
    return (
   
        <nav className="navBar">
            <div className="navbarContainer">
                <NavLink to= "/" className="logoIcon"></NavLink>
                <NavLink to= "/" >Home</NavLink>
                <NavLink to = "/cities">Cities</NavLink>
                <div>
                    <NavLink to = "/">Sign Up</NavLink>
                    <NavLink to = "/">Create Account</NavLink>
                </div>
               
            </div>
        </nav>
       
    )
}

export default Navbar