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
