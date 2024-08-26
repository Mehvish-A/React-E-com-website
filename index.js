import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {Container, Table} from "reactstrap";
import{Button} from "reactstrap";
import { emptyCart } from "../Slice/cart";
import { useNavigate } from "react-router-dom";
 export default function Index() {
  
 const {productId} = useParams();
 console. log ("productId",productId,tabIndex);
useEffect(()=>{},[productId,tabIndex]);





  return ( 
      
        <Container fluid>Product Details Page</Container>
                ) ;
}
