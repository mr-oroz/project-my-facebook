import React, {Component} from 'react';
import "./header.css"
import Service from "../service";
import Cookie from "js-cookie";
import {withRouter} from "react-router-dom";

const initialState = {
    name: "",
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
            const data = await res.json()
            for (let index in data) {
                const error = data[index]
                this.setState({error: error[0]})
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
                        <div className='offset-4 mb-4'>
                            <form onSubmit={this.onSubmit}
                                  className='text mt-1 ml-0'>
                                <label htmlFor="Name">Электронный адрес или номер телефона</label>
                                <label className='m-2' htmlFor="Password">Пароль</label>
                            </form>
                            <form>
                                <input onChange={this.onChange} name='name' type="text" id='Name'
                                       value={this.state.name}/>
                                <input onChange={this.onChange} className='password' name='password' type="password"
                                       id='Password' value={this.state.password}/>
                                {this.state.error && <p>{this.state.error}</p>}
                                <button className='ml-2 btn btn-primary'>Вход</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(Header);