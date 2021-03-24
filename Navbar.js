// import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import { Switch, Route,Link } from 'react-router-dom';
import '../css/Navbar.css'


class Navigation extends Component {
    render() {
        return (
            <div  >
                <div>
                    <Navbar>
                        {/* <div  >
                        <img  src="/image.png" />
                        </div>
                        */}
                 <div className="image"></div>
                       
                        <Navbar.Brand  href="/">Log in</Navbar.Brand>
                        <Navbar.Collapse>
                            <Nav className="mr-auto">
                                                 
                                <NavItem eventkey={1} href="/">
                                 <Link to="/feed">Tweet</Link>
                                 
                                    {/* <Nav.Link to="/feed">Home</Nav.Link> */}
                                </NavItem>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Enter</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    {/* <div>
                        <Link to="/feed">Display fFeed component</Link>
                    </div> */}
                </div>
                {/* <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={function () {
                            return <p>Not found</p>
                        }} />
                    </Switch>
                </div> */}
            </div>
        );
    }
}

export default Navigation;
