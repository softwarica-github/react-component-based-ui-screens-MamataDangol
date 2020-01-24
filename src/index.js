import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import{
    BrowserRouter as Router,
    Switch,
    Link, 
    Route 
} from 'react-router-dom'

import {
    Nav, Container, Row, Col, Card
} from 'react-bootstrap'

import Login from './components/login/login'

import Registration from './components/registation/registration'

class Index extends React.Component {

        constructor() {

            super()
        }

        render() {
            return (

                /* Using bootstrap for creating the division */

                <div>
                    
                   

                    <div> {/* for wrapping jsx components or use Fragment <> </> */}
                        <Router>
                            <div>
                                {/*Navbar using bootstrap */}
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/" active={true}>
                                                Home
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/login">
                                                Login
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/registration">
                                            Registration
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/logout">
                                                Logout
                                        </Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </div>

                            <Switch>
                            
                                <Route exact path="/login">
                                    < Login />
                                </Route>

                                <Route exact path="/registration">
                                    <Registration />
                                </Route>
                                
                            </Switch>
                        </Router>
                        
                    </div>
                </div>

             )
}

}

ReactDOM.render(<Index />, document.getElementById('navbar'))