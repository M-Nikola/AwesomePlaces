import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

const PlacesList = (props) => {   
    return <FlatList 
        style={styles.container}
        data={props.places}
        keyExtractor={(item) => item.key.toString()}
        renderItem={(info) => (
            <ListItem 
                placeName={info.item.placeName}
                placeImage={info.item.placeImage}
                onItemPressed={() => props.onItemSelected(info.item.key)}
            />
        )}
    />;
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

export default PlacesList;