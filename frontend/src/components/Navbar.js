import {NavLink, Link} from "react-router-dom"
import React, { useState } from 'react'
import { connect } from 'react-redux'
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
import usersActions from "../redux/actions/usersActions";

const NavBar = (props) => {
  const userIcon = props.token ?  <div className="userProfilePhoto" style={{ backgroundImage: `url('${props.profilePhoto}')` }}></div> : <img className="user" src= "/assets/person-circle.svg" alt="usericon" />
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
              <NavbarToggler className="ms-2" onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto d-flex align-content-center" navbar>
                <NavbarBrand href="#"><img src="/assets/logo2.png" alt="logo" className="logo"/></NavbarBrand>
                  <div className="p-3 navheader">
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink to="/cities">Cities</NavLink>
                      </NavItem>
                  </div>
                </Nav>
              </Collapse>
                {props.token && <p className="welcome">Welcome {props.firstName}!</p>}
              <UncontrolledDropdown nav inNavbar>
           <div className="userdiv">
           <DropdownToggle nav caret>
               {userIcon} 
              </DropdownToggle>
              <DropdownMenu right>
              {!props.token && (<DropdownItem>
                <Link to= "/signIn">Sign in</Link>
                </DropdownItem>)}
                {!props.token && (<DropdownItem>
                <Link to="/signUp">Sign up</Link>
                </DropdownItem>)}
                {props.token && <DropdownItem>
               <p className="signOut"onClick={()=> props.signOutUser()}> Sign out</p>
                </DropdownItem>}
              </DropdownMenu>
           </div>
            </UncontrolledDropdown>
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    token:state.users.token,
    firstName: state.users.firstName,
    profilePhoto: state.users.profilePhoto
  }
}

const mapDispatchToProps ={
  signOutUser:usersActions.signOutUser
}
export default connect(mapStateToProps, mapDispatchToProps) (NavBar)






// import {NavLink, Link} from "react-router-dom"
// import React, { useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
// } from 'reactstrap';

// const NavBar = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//       <Navbar color="light" light expand="md">
//       <div className="d-flex align-content-center">
//                     <NavbarBrand href="#"><img src="/assets/logo2.png" alt="logo" className="logo"/></NavbarBrand>
//                     <UncontrolledDropdown nav inNavbar>
//                         <DropdownToggle nav caret>
//                             <img className="user pt-3" src= "/assets/person-circle.svg" alt="usericon" />
//                         </DropdownToggle>
//                         <DropdownMenu right>
//                             <DropdownItem>
//                             <Link to= "/signIn">
//                               Sign in
//                             </Link>
//                             </DropdownItem>
//                             <DropdownItem divider/>
//                             <DropdownItem >
//                               <Link to="/signUp">
//                               Sign up
//                               </Link>
//                             </DropdownItem>
//                         </DropdownMenu>
//                         </UncontrolledDropdown>
//       </div> 
//     <div><NavbarToggler onClick={toggle}/>
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//               <div className="navheader">
//                 <NavItem>
//                     <NavLink to="/">Home</NavLink>
//                 </NavItem>
//                 <NavItem>
//                     <NavLink to="/cities">Cities</NavLink>
//                 </NavItem>
//                 </div>
//           </Nav>
//         </Collapse>
//     </div>
//       </Navbar>
//   );
// }

// export default NavBar;
