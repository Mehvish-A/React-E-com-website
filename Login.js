import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { Input } from "reactstrap";

export default function Index() {
  const navigate = useNavigate();
  return (
    <div>
         <Input
      
      name="email" placeholder="Enter your email" type ="email"></Input>
        <Input
      
      name="email" placeholder="Enter your passwrod" type ="password"></Input>
       
       
       


<Button onclick= {() => null } color = "secondary">Login</Button>

</div>
  )

  ;
}
