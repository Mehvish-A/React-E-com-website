import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Table} from "reactstrap";
import{Button} from "reactstrap";
import { emptyCart } from "../Slice/cart";
import { useNavigate } from "react-router-dom";
 export default function Index() {
  
  const {cart} = useSelector ((state) => state)
  const disptach = useDispatch();
  const navigate = useNavigate ();
  

    return ( 
      
        <Container fluid>
           {user. isloggedIn ? (<h4>Enter your details to Checkout</h4>):
           
           (<div>
            Please login to Proceed
            <br></br>
           <Button onClick={()=>navigate("./Login")}>Login</Button>
           </div>
           )};
               </Container>
                 
  ) ;


}
