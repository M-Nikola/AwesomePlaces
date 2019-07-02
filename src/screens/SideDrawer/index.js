import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class SideDrawer extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>DRAWER</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default SideDrawer;