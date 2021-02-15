// src/App.js

import React from "react";

import API from "../../api/aboutmeindex";
import Disp_Facts_about_me from "./Disp_Facts_about_me";

class Facts_about_me extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            height: null,
            weight: null,
            birthday: null,
            gender: null,
            isLoading: true
        };
    }
    render() {
        const { name, height, weight, birthday, gender, isLoading } = this.state;

        return (
            <Disp_Facts_about_me name={name} height={height} weight={weight} birthday={birthday} gender={gender} isLoading={isLoading} />
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
                inc: 'name, height, weight, birthday, gender'
                }
            });
        /*} catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
        }*/

        // Parse the results for ease of use.
        userData = userData.data.data;

        // Update state with new data and re-render our component.
        const name = userData.name;
        const height = userData.height;
        const weight = userData.weight;
        const birthday = userData.birthday;
        const gender = userData.gender;

        this.setState({
            ...this.state, ...{
                name,
                height,
                weight,
                birthday,
                gender,
                isLoading: false
            }
        });
    }
    
    
} export default Facts_about_me;
