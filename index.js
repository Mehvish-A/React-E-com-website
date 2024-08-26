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
  const renderSubtotal  = () => {
    let totalPrice =0;
     cart.map ((item) => (totalPrice = totalPrice + item.price ));
     return totalPrice;
  };
  const handleEmptyCart = () =>{
disptach (emptyCart());
  };
  const handleCheckout = () =>{
navigate ("/Checkout");
  };
    return ( 
      
        <Container fluid>
                <h5>Cart Details</h5>
               
                {cart.lenght === 0 ? (
                    <p>Cart is Empty</p>
                ) :(
                  <>
                  <Button click={handleEmptyCart}>Empty Cart</Button>
                
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                 
                  {cart.map ((item,i)=>  
                  <tr key ={`${1}`}>
                    <th scope="row">{i+1}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>PKR{item.price}</td>
                    <td>
                        <Button color = "danger">Delete</Button>
                    </td>
                  </tr>)}
                  <tr>
                    <td colspan={4}></td>
                    <td>Total:PKR {renderSubtotal()}</td>
                  </tr>
                </tbody>
              </Table>
              <Button onClick = {handleCheckout}>Proceed to checkout</Button>
              </>
                )};
            </Container>
                 
  ) ;


}
