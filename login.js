import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { Input,Col,Container,Row,formData,FormGroup,Label} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import { setUserLogin } from "../slice/userslice";
export default function Index(setLoggedin) {
 const [formData, setformData, ] = useState({
  email : "",
  passwrod : "",
 });

 const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email && password) {
      dispatch(setUserLogin({ email }));
      toast.success ("User successfully loggedin"),
        
        
      navigate("/");
    } else {
      toast.error("Please enter both email and password");
    }
  };


  return (
    <div>
       return (
    <Container>
      <Row>
        <Col sm={12} md={6} className="mx-auto">
          <h1 className="text-center mx-3">Login</h1>
          <Form onSubmit={handleChange}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setformData({ ...formData, email: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setformData({ ...formData, password: e.target.value })
                }
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );

</div>
  )

  ;
}
