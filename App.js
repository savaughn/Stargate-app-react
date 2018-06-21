import React from 'react';
import {Home} from './app/screens/Home.js';
import {Contact} from "./app/components/Contact";
import {createStackNavigator} from 'react-navigation';

const MyRoutes = createStackNavigator({
        homeRoute: {
            screen: Home
        },
        contactRoute: {
            screen: Contact
        },
    }, {
        initialRouteName: 'homeRoute'
    }
);

export default class App extends React.Component {
    render() {
        return <MyRoutes/>;
    }
}
