import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Navbar/Button";
import { MenuItems } from "../Navbar/MenuItems"
import '../Navbar/Navbar.css'
import '../aboutme/Aboutme.css';
import menuIcon from '../aboutme/Images/menu.svg'
class Navbar extends Component {
    state = { clicked: false }
    handdleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">   
                <div className="row">
                    
                    <h1 className="Navbar-logo">
                        <div className="margin-20px">
                            bom
                            <img src={menuIcon} className="pic-menu" />
                            <div className="menu-icon" onClick={this.handdleClick}>
                                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                            </div>
                            </div>
                        </h1>
                    
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