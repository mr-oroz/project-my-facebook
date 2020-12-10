import React, {Component, Suspense} from 'react';
import Header from "../header/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "../register/register";
import Cookie from "js-cookie";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Service from "../service";

const Home = React.lazy(() => import("../home/home"))
const Logout = React.lazy(() => import("../logout/logout"))


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
            <div>
                <Router>
                    <Switch>
                        <Route exact path={'/'}>
                            <Header login={this.login} user={this.state.user} logout={this.logout}/>
                            <Register/>
                        </Route>
                        <Route exact path={'/Home'}>
                            <Suspense fallback={<p>Loading...</p>}>
                                <Home/>
                            </Suspense>
                        </Route>
                        <Route exact path={'/logout'}>
                            <Suspense fallback={<p>Loading...</p>}>
                                <Logout logout={this.logout}/>
                            </Suspense>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;