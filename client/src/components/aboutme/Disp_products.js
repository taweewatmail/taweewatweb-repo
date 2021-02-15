import React from "react";
import PropTypes from "prop-types";
//import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css";
import './Aboutme.css'
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import conDB from "./Images/conDB.PNG";
import apiModel from "./Images/apiModel.PNG";
import jokeContrl from "./Images/jokeContrl.PNG";
import conApi from "./Images/jokeApi.PNG";
import mernStack from "./Images/mernStack.PNG";
import login from "./Images/login.PNG";
import register from "./Images/register.PNG";
import jokeCreate from "./Images/jokeCreate.PNG";
import jokeList from "./Images/jokeList.PNG";
import CtrlDoorLogin from "./Images/CtrlDoorLogin.png";
import CtrlDoorPin from "./Images/CtrlDoorPin.png";
import CtrlDoorAccount from "./Images/CtrlDoorAccount.png";
import CtrlDoor from "./Images/CtrlDoor.png";
import solarMenu from "./Images/solarMenu.png";
import solarCalPoint from "./Images/solarCalPoint.png";
import solarSelMap from "./Images/solarSelMap.png";
import solarCalArea from "./Images/solarCalArea.png";
import solarDes from "./Images/solarDes.png";
//import "shards-ui/dist/css/shards.min.css";

//import { Card } from "shards-react";
/*const Title = styled.h1.attrs({
    className: 'h1',
})``*/

class Disp_products extends React.Component {
    render() {
        const { solar_prod, door_contr_prod, isLoading } = this.props;
        const IMAGES =
            [{
                src: apiModel,
                thumbnail: apiModel,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "apiModel"
            },
            {
                src: conDB,
                thumbnail: conDB,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Connect DB", title: "Connect DB" }, { value: "Code", title: "Code" }],
                caption: "Code connect DB"
            },

            {
                src: jokeContrl,
                thumbnail: jokeContrl,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },

            {
                src: conApi,
                thumbnail: conApi,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: mernStack,
                thumbnail: mernStack,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: login,
                thumbnail: login,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: register,
                thumbnail: register,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: jokeCreate,
                thumbnail: jokeCreate,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },
            {
                src: jokeList,
                thumbnail: jokeList,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            }]
        const contrlDoorIMAGES =
            [{
                src: CtrlDoorLogin,
                thumbnail: CtrlDoorLogin,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "Login page"
            },
            {
                src: CtrlDoorPin,
                thumbnail: CtrlDoorPin,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "PINPage", title: "PINPage DB" }],
                caption: "Login by PIN"
            },

            {
                src: CtrlDoorAccount,
                thumbnail: CtrlDoorAccount,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },

            {
                src: CtrlDoor,
                thumbnail: CtrlDoor,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            }]
        const solarIMAGES =
            [{
                src: solarMenu,
                thumbnail: solarMenu,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: true,
                caption: "Menu page"
            },
            {
                src: solarCalPoint,
                thumbnail: solarCalPoint,
                thumbnailWidth: 320,
                thumbnailHeight: 212,
                tags: [{ value: "Calculate point", title: "Calculate point" }],
                caption: "Calculate position to set solar"
            },

            {
                src: solarSelMap,
                thumbnail: solarSelMap,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },

            {
                src: solarCalArea,
                thumbnail: solarCalArea,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            },

            {
                src: solarDes,
                thumbnail: solarDes,
                thumbnailWidth: 320,
                thumbnailHeight: 212
            }]
        const userDetails = (
            <div className="container wrapper">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="margin-5px box-shadow">
                            <div className="headnoteblue">
                                <h3>Joke Web Application</h3>
                            </div>
                            <div className="bodynote">
                                <div className="col-sm">
                                    <div className="row">
                                        <h5>
                                            <Gallery images={IMAGES} />
                                            <br />
                                            Description: This web app create for develop my practise, 
                                            Such as create API and use by Express or I can requirest API by React all my data store in MoongoDB free online database.
                                            Use Mern Stack to create authentification for access joke web
                                            <br />Go to <a href="/home">JokeWeb</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="margin-5px">
                            <div className="box-shadow">
                                <div className="headnoteblue">
                                    <h3>Control door Application</h3>
                                </div>
                                <div className="bodynote">
                                    <div className="col-sm">
                                        <div className="row">
                                            <h5>
                                                <Gallery images={contrlDoorIMAGES} />
                                                <br />Description: {door_contr_prod}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="margin-5px">
                            <div className="box-shadow">
                                <div className="headnoteblue">
                                    <h3>Solar Application</h3>
                                </div>
                                <div className="bodynote">
                                    <div className="col-sm">
                                        <div className="row">
                                            <h5>
                                                <Gallery images={solarIMAGES} />
                                                <br />Description: {solar_prod}
                                            </h5>
                                        </div>
                                    </div>
                                </div>
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

Disp_products.propTypes = {
    solar_prod: PropTypes.string,
    door_contr_prod: PropTypes.string,
    isLoading: PropTypes.bool
};

export default Disp_products;
