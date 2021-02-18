import React from "react";
import PropTypes from "prop-types";
//import styled from 'styled-components'
//import "bootstrap/dist/css/bootstrap.min.css";
import './Aboutme.css'

class Disp_Facts_about_me extends React.Component {
    render() {
        const { name, height, weight, birthday, gender, phone, mail, isLoading } = this.props;

        const userDetails = (
            <div className="container wrapper">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Personal Data</h3>
                            </div>
                            <div className="bodynote">
                                <h5>
                                    Name: {name}<br />
                                    Height: {height}<br />
                                    Weight: {weight}<br />
                                    Birthday: {birthday}<br />
                                    Gender: {gender}
                                </h5>
                            </div>
                        </div>
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Carerr Object</h3>
                            </div>
                            <div className="bodynote">
                                <h5>I want to develop my programming skill, learn more about programming language
                                    and use this pactrise to help product in my company</h5>
                            </div>
                        </div>
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Developing Platform</h3>
                            </div>
                            <div className="bodynote">
                                <h5>Web Application<br />
                                Mobile Appplication<br />
                                Programs on PC<br />
                                Auduino control by application</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Programming Skills</h3>
                            </div>
                            <div className="bodynote">
                                <h5>
                                    <div className="row">
                                        <div className="col-3">
                                            Java
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Foxpro
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            HTML
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            NodeJs
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            React
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Express
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            XML
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Python
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            PHP
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                </h5>
                            </div>
                        </div>
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Database Skills</h3>
                            </div>
                            <div className="bodynote">
                                <h6>
                                    <div className="row">
                                        <div className="col-3">
                                            MongoDB
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Firebase
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            MySQL
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                </h6>
                            </div>
                        </div>
                        <div className="margin-5px">
                            <div className="headnoteblue">
                                <h3>Tools Skills</h3>
                            </div>
                            <div className="bodynote">
                                <h6>
                                    <div className="row">
                                        <div className="col-3">
                                            Android Studio
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Visual Studio
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            GitHub
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            Arduino
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            AppServ
                                            </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="level">&nbsp;</div>
                                        </div>
                                        <div className="col-2">
                                            <div>&nbsp;</div>
                                        </div>
                                        <div className="col-1">
                                            <div>&nbsp;</div>
                                        </div>
                                    </div>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

        return (
            <div>
                    {isLoading ? loadingMessage : userDetails}
            </div>
        );
    }
}

Disp_Facts_about_me.propTypes = {
    name: PropTypes.string,
    height: PropTypes.string,
    weight: PropTypes.string,
    birthday: PropTypes.string,
    gender: PropTypes.string,
    isLoading: PropTypes.bool
};

export default Disp_Facts_about_me;
