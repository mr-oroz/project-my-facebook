import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Link to={'/home'}>
                <div>
                    Добро пожаловать
                </div>
            </Link>
        );
    }
}

export default Home;