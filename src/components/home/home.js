import React, {Component, Fragment} from 'react';
import {Form, FormControl, Nav, Navbar, Button, Container} from "react-bootstrap";
import {Link, NavLink, withRouter} from "react-router-dom";
import Service from "../service";
import "./home.css";


class Home extends Component {
    service = new Service()
    render() {
        return (
            <Navbar onSubmit={this.onSubmit} bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand>ItPark</Navbar.Brand>
                    <Nav className="mr-auto">
                        <NavLink to={"/"} className={"nav-link"}>Главная</NavLink>
                        <Nav.Link href="#features">Лента</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Найти" className="mr-sm-2"/>
                        <Button variant="outline-light">Найти</Button>
                        <Link to={'/logout'}>
                            <Button className='ml-2' variant="outline-light">Выход</Button>
                        </Link>
                    </Form>
                </Container>
            </Navbar>
        );
    }
}

export default withRouter(Home);