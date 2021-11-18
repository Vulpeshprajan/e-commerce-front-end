import React ,{useState} from 'react'
import { Form, Card, InputGroup, FormControl, Button, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {userRegister} from "./userAction";

const initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    gender: "",

}

const Register = () => {
 const dispatch = useDispatch()

    const [user, setUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState("")
  
  const {isPending, userRegisterResponse} = useSelector(state => state.user)


    const handleOnChange = e => {
// set input value in the state  
const {name, value} = e.target
        console.log(name, value)
        passwordError && name === "confirmPassword" && setPasswordError("")

        setUser({
            ...user,
            [name] : value
})

    }
     
    const handleOnSubmit = e => {
        // send the form data to the server 
        e.preventDefault()
        // check for the password confirmation 
        const {confirmPassword, ...newUser} = user
        const { password} = user
        
      if (password !== confirmPassword) {
        setPasswordError("Password did not match")
        return
      }

   
        dispatch(userRegister(newUser))
     

    }
    console.log(user)

    return (
        <div className = "register-page mb-5">
            
            <Card className="p-3 reg-form">
          <h2>Register new admin user</h2> <hr />
          {isPending && <Spinner variant="primary" animation="border" />}
          {userRegisterResponse?.message && <Alert variant={userRegisterResponse.status === "success" ? "success" : "danger"}
          
          > {userRegisterResponse.message}    </Alert> }
            <Form className= "mt-3" onSubmit = {handleOnSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>First Name *</Form.Label>
    <Form.Control
                name="fname"
                            onChange={handleOnChange}
                placeholder="Sagar " required />
    
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Last Name *</Form.Label>
    <Form.Control name = "lname" onChange={handleOnChange} placeholder="Pyakurel " required/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Email *</Form.Label>
    <Form.Control name = "email" type = "email" onChange={handleOnChange}placeholder="Youremail@email.com" required/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Password *</Form.Label>
    <Form.Control name = "password" type= "password" onChange={handleOnChange} minLength = "8" placeholder="Please enter your password " required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Confirm Password *</Form.Label>
                        <Form.Control name="confirmPassword" type="password" onChange={handleOnChange} required />
                        {passwordError && <Alert variant="danger" > {passwordError} </Alert>}
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Date of birth</Form.Label>
    <Form.Control name = "dob" type ="date" onChange={handleOnChange}/>
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Phone</Form.Label>
    <Form.Control name = "phone"   onChange={handleOnChange}placeholder="04xxxxxxxx" />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label>Address</Form.Label>
    <Form.Control name = "address"onChange={handleOnChange} onChange= {handleOnChange} placeholder=" i.e. 50 george street , NSW Sydney,2000 " />
  </Form.Group>
                    <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
  <InputGroup>
    <InputGroup.Radio name= "gender" defaultValue="male" onChange={handleOnChange}aria-label="Male" /> Male
   
    <InputGroup.Radio name="gender" defaultValue="Female" onChange={handleOnChange} aria-label="Female" /> Female
  </InputGroup>
  </Form.Group>
 
    <Button variant= "success" type= "submit" > Register </Button>            
  
</Form>
</Card>   
        </div>
    )
}

export default Register;