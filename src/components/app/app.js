import React, {Component} from 'react';
import Header from "../header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "../register/register";
import Cookie from "js-cookie";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Service from "../service";

class App extends Component {
    service = new Service()
    state = {
        user: {}
    }

    componentDidMount() {
        this.login()
    }

    login = () => {
        this.service.getUser().then((data) => {
            this.setState({user: data})
        }).catch(() => {
            this.logout()
        })
    }

    logout = () => {
        Cookie.remove("token")
        this.setState({user: {}})
    }

    render() {
        return (
            <Router>
                <Switch>
                    <div>
                        <Route path exact={'/'}>
                            <Header user={this.state.user} logout={this.logout}/>
                        </Route>
                        <Register/>
                    </div>
                </Switch>
            </Router>
        );
    }
}

export default App;