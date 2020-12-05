import React, {Component} from 'react';
import "./header.css";
import Service from "../service";
import Cookie from "js-cookie";
import {withRouter} from "react-router-dom";

const initialState = {
    username: "",
    password: ""
}


class Header extends Component {

    service = new Service()
    state = initialState

    onChange = (e) => {
        const elem = e.currentTarget
        this.setState({
            [elem.name]: elem.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.service.createLogin(this.state).then((data) => {
                Cookie.set('token', data["auth_token"]);
                this.setState(initialState)
                this.props.login()
                this.props.history.push("/")
            }
        ).catch(async ({res}) => {
            // ошибканы кармоо
            if (res) {
                const data = await res.json()
                for (let index in data) {
                    const error = data[index]
                    this.setState({error: error[0]})
                }
            }
        })
    }

    render() {
        return (
            <nav className="my-nav">
                <div className="container">
                    <div className='d-flex'>
                        <h3 className='mt-4'>facebook
                            <a href=""></a>
                        </h3>
                        <div className='ml-auto mb-4'>
                            <form className="form-row form-login text mt-4 ml-0" onSubmit={this.onSubmit}>
                                <div className="col-7">
                                    <label htmlFor="Login">Электронный адрес или номер телефона</label>
                                    <input onChange={this.onChange} name='username' type="text" id='Login'
                                           value={this.state.username}/>

                                </div>
                                <div className="col-4">
                                    <label htmlFor="PasswordLogin">Пароль</label>
                                    <input onChange={this.onChange} name='password' type="password"
                                           id='PasswordLogin' value={this.state.password}/>

                                </div>
                                {this.state.error && <p>{this.state.error}</p>}
                                <div className="col-1 mt-3">
                                    <button type='submit' className='ml-2 btn btn-primary'>Вход</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);