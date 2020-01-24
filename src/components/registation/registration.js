import React from 'react'
import {
    Form, Button
} from 'react-bootstrap'

import { Redirect } from 'react-router-dom';

class Registration extends React.Component{
    constructor(){
        super()

        this.state={
            username:'',
            password:'',
            repassword: '',
            validationMessage:'',
            redirect:false

        }
    }

    usernameChangeHandler = (event) => {
        if(event.target.value.length < 6){
            this.setState({validationMessage: 'Username must be less than 6 chars'})
        }
        this.setState({username: event.target.value})
    }

    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value})
    }
    repasswordChangeHandler = (event) => {
        this.setState({repassword: event.target.value})
    }

    formSubmitHandler = (e) => {

        e.preventDefault()

        //use API call to post the data
        //fetch by default JS
        //Axios external storage



        //console.log(this.state) //this state js object

        // 1st URL
        // 2nd data JS Object
        // 3rd header JS Objec
        var headers = {
            'Content-Type': 'application/json'
        }

        var data = {
            username: this.state.username,
            password: this.state.password
        }
    
        Axios.post('http://localhost:3001/registration',data, headers)
        .then(function(response){
            console.log(response.data.status);
            if(response.status === 201){
                this.setState({redirect:true})

                // redirect to login page 
            }
        })
        .catch(function(err){
    
        })
    }

    render(){

        //what to render based in state
        if(this.state.redirect){
            return (
                <Redirect to='/login'/>
            )
        }


        return(

           // if(this.state.redirect == true){ 

            //   //actual redirect work

            // }
            <div style={{width: "400px", margin: "0 auto", fontStyle:"italic"}}>
                <h1>User Registration</h1>
                <Form onSubmit={this.formSubmitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.usernameChangeHandler} />
                        <Form.Text className="text-muted">
                            {this.state.validationMessage}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChangeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Re-Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-Password" value={this.state.repassword} onChange={this.repasswordChangeHandler}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Gender:</Form.Label>
                        {['radio'].map(type => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check inline label="Male" type={type} name={"gender"} id={`inline-${type}-1` } />
                            <Form.Check inline label="Female" type={type} name={"gender"} id={`inline-${type}-2`} />
                            <Form.Check inline label="Others" type={type} name={"gender"} id={`inline-${type}-3`}/>
                            </div>
                        ))}
                    </Form.Group>


                    <Button variant="danger" type="submit">Submit</Button>
                 </Form>
             </div>
        )
    }
}

export default Registration