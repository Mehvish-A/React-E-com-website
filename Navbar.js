import { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarText,
Badge,
NavLink,

  
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "./slice/userslice";
import { toast } from "react-toastify";
export default function NavBar() {
  const {user,cart} = useSelector ((state ) => state);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  {user.LoggedIn ? (<NavbarText ClassName ="mr-5">Welcome{user.data.email}</NavbarText>):null};
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout =() =>dispatch(LogoutUser());
  toast.success ("User logged out");
  return (
    <div>
      <Navbar color="primary" expand={"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

        
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/Cart"}>
                Cart
              </Link>
              <Badge color="success">{cart.lenght}</Badge>
            </NavItem>
            <NavItem>
               (<NavLink onClick= {() =>dispatch(LogoutUser)}>Logout</NavLink>) 
               :(
              <Link className="nav-link" to={"/Login"}>
                Login
              </Link>)
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}