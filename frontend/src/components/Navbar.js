import {NavLink} from "react-router-dom"
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Navbar color="light" light expand="md" className="d-flex justify-content-between ">
        <NavbarBrand href="#"><img src="./assets/logo.png" alt="logo" className="logo"/></NavbarBrand>
    <div><NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <div className="navheader">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  to="/cities">Cities</NavLink>
                </NavItem>
                </div>
            
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        <img className="user" src= "./assets/person-circle.svg" alt="usericon" />
          
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Create new account
                        </DropdownItem>
                        <DropdownItem>
                        Log in
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Log out
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
           
          </Nav>
        </Collapse>
    </div>
      </Navbar>
  );
}

export default NavBar;






// import React from "react"
// import {NavLink} from "react-router-dom"

// const Navbar = () =>{
//     return (
   
//         <nav className="navBar">
//             <div className="navbarContainer">
//                 <NavLink to= "/" className="logoIcon">
//                     <img src="./assets/logo.png" alt="logo"/>
                
//                 </NavLink>
//                 <div className="account">
//                     <NavLink to= "/" >Home</NavLink>
//                     <NavLink to = "/cities">Cities</NavLink>
//                     <NavLink className="user" to = "/">
//                     <img src= "./assets/person-circle.svg" alt="usericon"/>
//                     </NavLink>
//                 </div>
                
              
//             </div>
//         </nav>
       
//     )
// }

// export default Navbar

