import React from 'react';
import {Alert, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {HeaderBackButton} from 'react-navigation';

export class Contact extends React.Component {

    static navigationOptions = ({navigation}) => ({
        headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)}/>
    });
    clearFields = () => this.setState({name: '', msg: '', email: ''});
    sendMsg = () => {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };

    constructor(props) {
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Email address'
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Contact us! </Text>

                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />
                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline={true}
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />
                <TouchableHighlight onPress={this.sendMsg} underlayColor='#31e981'>
                    <Text style={styles.button}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.button}>
                        Reset Form
                    </Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '20%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10
    },
    multiInput: {
        flex: 2,
        width: '90%',
        paddingTop: 20
    },
    buttons: {
        marginTop: 15,
        fontSize: 16
    }
});