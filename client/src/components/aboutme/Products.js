// src/App.js

import React from "react";

import API from "../../api/aboutmeindex";
import Disp_Facts_about_me from "./Disp_products";

class Products extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            solar_prod: null,
            door_contr_prod: null,
            isLoading: true
        };
    }
    render() {
        const { solar_prod, door_contr_prod, isLoading } = this.state;

        return (
            <Disp_Facts_about_me solar_prod={solar_prod} door_contr_prod={door_contr_prod } isLoading={isLoading} />
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
                inc: 'solar_prod, door_contr_prod'
                }
            });
        /*} catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }*/

        // Parse the results for ease of use.
        userData = userData.data.data;

        // Update state with new data and re-render our component.
        const solar_prod = userData.solar_prod;
        const door_contr_prod = userData.door_contr_prod;

        this.setState({
            ...this.state, ...{
                solar_prod,
                door_contr_prod,
                isLoading: false
            }
        });
    }
    
    
} export default Products;
