import React, { Component } from 'react';
import About from '../Services/about';
import axios from 'axios';
import Service from './service';
import '../CSS/header.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import { login_GET, logout_GET } from '../Services/API/api';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            status: true,
            inputName: false
        }
    }

    login = () => {
        var authenticate = document.getElementById("authenticate").value;
        login_GET(authenticate).then(() => { this.setState({ name: authenticate, status: false, inputName: true }); })
    }
    logout = () => {
        var authenticate = document.getElementById("authenticate").value;
        logout_GET(authenticate).then(() => { this.setState({ status: true, inputName: false });})
    }

    render() {
        return <>
            <input id="authenticate" type="text" placeholder="EnterName" disabled={this.state.inputName} />
            <input type="button" onClick={this.login} value="login" />
            <input type="button" onClick={this.logout} value="logout" />
            {this.state.status ? <span id="nameErr"><br />Authenticate First </span> :
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark navBar">
                        <NavLink to="/" className="nav-item NavLink btn">Blog It Out</NavLink>
                        <NavLink to="/blog" className="nav-item NavLink btn" onClick={this.handleClick} >Blogs</NavLink>

                    </nav>
                    <hr />
                    <Switch>
                        <Route path="/" component={About} exact />
                        <Route path="/blog" render={() => <Service bloggername={this.state.name} />} />
                    </Switch>
                </Router>
            }


        </>
    }
}
export default Header;