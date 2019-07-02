import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions';

class PlaceDetailsScreen extends Component {
    static options(passProps) {
        return {
          topBar: {
            title: {
              text: passProps.place.placeName
            }
          }
        };
    }

    onItemDeleted = () => {
        this.props.deletePlace(this.props.place.key);
        this.onClosed();
    }

    onClosed = () => {
        Navigation.pop(this.props.componentId);
    }

    render () {
        const { placeName, placeImage } = this.props.place;
        return (
            <View style={styles.container}>
                 <View>
                    <Image
                        style={styles.image} 
                        source={placeImage} 
                    />
                    <Text
                        style={styles.text}
                    >
                        {placeName}
                    </Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={this.onItemDeleted}>
                        <Icon
                            name="trash"
                            size={30}
                            color='red'
                        />
                    </TouchableOpacity>
                    <Button title='Close' onPress={this.onClosed}/>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    text: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttons: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        deletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetailsScreen);