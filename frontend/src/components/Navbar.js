import {NavLink, Link} from "react-router-dom"
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
      <div className="d-flex align-content-center">
                    <NavbarBrand href="#"><img src="/assets/logo2.png" alt="logo" className="logo"/></NavbarBrand>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <img className="user pt-3" src= "/assets/person-circle.svg" alt="usericon" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            <Link to= "/signIn">
                              Sign in
                            </Link>
                            </DropdownItem>
                            <DropdownItem divider/>
                            <DropdownItem >
                              <Link to="/signUp">
                              Sign up
                              </Link>
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
      </div> 
    <div><NavbarToggler onClick={toggle}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <div className="navheader">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/cities">Cities</NavLink>
                </NavItem>
                </div>
                <div className="pe-4">
                </div>
          </Nav>
        </Collapse>
    </div>
      </Navbar>
  );
}

export default NavBar;
