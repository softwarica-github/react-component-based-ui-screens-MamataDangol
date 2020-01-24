import React from 'react'
// import Button from '../Button/Button'
import {
	Form, Button
} from 'react-bootstrap'

import Axios from 'axios'


class Login extends React.Component{

	constructor(){

		super()

		this.state = {
			username: '',
			password: '',
		}

}


usernameChangeHandler = (event) => {

	this.setState({username: event.target.value})
  
  
  }
  
  passwordChangeHandler = (event) => {
  
  this.setState({password: event.target.value})
	
  }
  
  fromSubmitHnadler = (e) => {
	e.preventDefault()
  
  
  // use API call to post the data 
  //fetch byt default JS
  // Axios external package
  
  
	console.log(this.state) // this sate js object
	// 1st url 
	// 2nd data JS object
	// 3rd header JS object 
  var headers = {
  
  'Content-Type':'application/json'
  
  }
	Axios.post('http://localhost:3023/login', this.state , headers)
	.then(function(response){
  
	})
	.catch(function(err){
  
	})
  
  }
render(){
	return(
		<div style={{width: "400px", margin: "0 auto", fontStyle:"italic"}}>
			<h1>Login</h1>
			<Form onSubmit={this.fromSubmitHnadler}>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Username </Form.Label>
				<Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.usernameChangeHandler} />
			</Form.Group>

				<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={this.passwordChangeHandler} />
			</Form.Group>


			<Button variant="danger" type="submit">
				Submit
			</Button>
			</Form>
		</div>
		)

}


}

export default Login