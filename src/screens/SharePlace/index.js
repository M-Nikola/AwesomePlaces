import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlacesInput from '../../PlacesInput';
import { addPlace } from '../../store/actions';

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }

    navigationButtonPressed({ buttonId }) {
        if (buttonId === 'menuButton') {
            Navigation.mergeOptions(this.props.componentId, {
                sideMenu: {
                  left: {
                    visible: true
                  }
                }
            });
        }
    }

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
    }

    render () {
        return (
            <View>
                <PlacesInput 
                    addPlace={this.placeAddedHandler}
                />
            </View>
        );
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placename) => dispatch(addPlace(placename))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);