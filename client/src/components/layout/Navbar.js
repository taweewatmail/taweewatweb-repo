import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Navbar/Button";
import { MenuItems } from "../Navbar/MenuItems"
import '../Navbar/Navbar.css'
class Navbar extends Component {
    state = { clicked: false }
    handdleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">React<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handdleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                
            </nav>
        );
    }
}
export default Navbar;