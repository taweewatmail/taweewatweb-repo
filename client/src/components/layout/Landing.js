import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                
                    <div className="col s12 center-align">
                        <h4>
                            <b>Taweewat Phimhin</b>
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                        My web application full stack and mern authentification
                        </p>
                        <br />
                    <div className="row">
                        <div className="col s6 right-align">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable bluelight accent-3">
                                Register
                            </Link>
                        </div>
                        <div className="col s6 left-align">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable grey accent-3">
                                Log In
                             </Link>
                        </div>
                        </div>
                    </div>
                </div>
   
        );
    }
}
export default Landing;