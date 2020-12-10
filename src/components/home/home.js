import React, {Component} from 'react';
import {Form, FormControl, Nav, Navbar, Button, Container} from "react-bootstrap";
import {Link, NavLink, withRouter} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <Navbar onSubmit={this.onSubmit} bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">It-Park</Navbar.Brand>
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