import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Text} from 'react-native';

class PlacesInput extends Component {
    state = {
        placeName: '',
        places: []
    }

    placeNameChangedHandler = placeName => {
        this.setState({
            placeName
        });
    };

    addPlace = () => {
        this.setState(prevState => {
            this.props.addPlace(prevState.placeName);
            return {
                placeName: ''
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new place'
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button
                    title='ADD'
                    style={styles.button}
                    onPress={this.addPlace}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '70%'
    },
    button: {
        width: '30%',
    }
});

export default PlacesInput;