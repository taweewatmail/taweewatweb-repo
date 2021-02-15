// src/App.js

import React from "react";

import API from "../../api/aboutmeindex";
import Disp_Facts_about_me from "./Disp_contract";

class Contract extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            phone: null,
            mail: null,
            isLoading: true
        };
    }
    render() {
        const { phone, mail, isLoading } = this.state;

        return (
            <Disp_Facts_about_me phone={phone} mail={mail} isLoading={isLoading} />
        );
    }

    // src/App.js

    // ...

    async componentDidMount() {
        // Load async data.
        //try {
        //${ 6005055e7eaa64024c096c73 }
        let userData = await API.get('/aboutme/60093da5a9c6d4247c03e5c9', {
                params: {
                inc: 'phone, mail'
                }
            });
        /*} catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }*/

        // Parse the results for ease of use.
        userData = userData.data.data;

        // Update state with new data and re-render our component.
        const phone = userData.phone;
        const mail = userData.mail;

        this.setState({
            ...this.state, ...{
                phone,
                mail,
                isLoading: false
            }
        });
    }
    
    
} export default Contract;
