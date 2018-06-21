import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {Menu} from "../components/Menu";

export class Home extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header message='Press to login'/>
                <Hero/>
                <Menu navigate={navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});