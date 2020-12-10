import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import Service from "../service";

class Logout extends Component {
    service = new Service()
    state = {
        logout: false
    }

    componentDidMount() {
        this.service.deleteLogin().then(() => {
            this.props.logout()
            this.setState({logout: true})
        })
    }

    render() {
        if (this.state.logout) {
            return (
                <Redirect to={"/"} push/>
            );
        }
        return null;
    }
}

export default Logout;