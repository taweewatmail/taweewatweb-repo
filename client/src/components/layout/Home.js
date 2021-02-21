import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, useImage } from 'react-render-image';
import myPhoto from "../aboutme/Images/Photo_Taweewat.jpg";
import '../aboutme/Aboutme.css';
import Develop from '../aboutme/Images/seo.svg'
import Platform from '../aboutme/Images/app-design.svg'
class Landing extends Component {
    render() {
        return (
            <div className="container wrapper">
                <div className="row">
                    <div className="col-sm-12">
                        <br />
                        <div className="container wrapper">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="margin-5px">
                                        <div className="box-shadow">
                                            <div className="ccorners">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <img src={Develop} className="pic-user" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <h1>Welcome to my website</h1>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <img src={Platform} className="pic-user" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>   
                        <div className="container wrapper">
                            <div className="col-sm-12 center-slign">
                                <div className="row">
                                    <div className="col-sm-4 center-align">
                                        <img src={myPhoto} width="230" height="300" />
                                    </div>
                                    <div className="col-sm-8 left-align">
                                        <p className="flow-text grey-text text-darken-1">
                                            <h2>
                                                Name: Taweewat Phimhin<br/>
                                                Nickname: bom
                                            </h2>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   
        );
    }
}
export default Landing;