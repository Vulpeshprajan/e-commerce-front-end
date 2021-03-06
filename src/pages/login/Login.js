
import React from 'react'
import { Card, Form, InputGroup, Button } from 'react-bootstrap'

const Login = () => {
    return (
        <div className = "register-page mb-5">
            
        <Card className="p-3 reg-form">
        <h2>Admin login</h2> <hr/>
        <Form className= "mt-3">

<Form.Group className="mb-3">
<Form.Label>Email</Form.Label>
<Form.Control name = "fname" type = "email" placeholder="Youremail@email.com" required/>
</Form.Group>
<Form.Group className="mb-3">
<Form.Label>Password</Form.Label>
<Form.Control name = "password" type= "password" placeholder="secret " />
</Form.Group>


<Button variant= "primary" > Login </Button>            

                </Form>
                
                <a href="/registration">Register now</a>
</Card>   
    </div>
    )
}

export default Login
