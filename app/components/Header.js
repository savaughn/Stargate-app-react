import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export class Header extends React.Component {
    toggleUser = () => {
        this.setState(previousState => {
            return {isLoggedIn: !previousState.isLoggedIn};

        })
    }

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
    }

    render() {
        let display = this.state.isLoggedIn ? 'Sample User' : this.props.message;
        return (
            <View style={styles.headStyle}>
                <Image style={styles.logoStyle}
                       source={require('./img/logo.png')}/>
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}> {display} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        padding: 5,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: .3,
        width: undefined,
        height: undefined
    }
});