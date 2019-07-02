import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import PlaceList from '../../PlacesList';

class FindPlaceScreen extends Component {
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

    showDetails = key => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'awesome-places.PlaceDetailsScreen',
              passProps: {
                  place: this.props.places.find(place => {
                      return place.key === key;
                  })
              }
            }
          });
    };

    render () {
        return (
            <View>
                <PlaceList 
                    places={this.props.places}
                    onItemSelected={this.showDetails}
                />
            </View>
        );
    };
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    };
}

export default connect(mapStateToProps)(FindPlaceScreen);