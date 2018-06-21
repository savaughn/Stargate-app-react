import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export class Menu extends React.Component {

    onPress = () => {
        Alert.alert('Jaffa, Kree!');
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this.onPress}>
                        <Text style={styles.buttonText}> LESSONS </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={() => this.props.navigate('contactRoute')}>
                        <Text style={styles.buttonText}> CONTACT </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#000000',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});