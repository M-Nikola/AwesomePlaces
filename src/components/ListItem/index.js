import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.container}>
            <Image
                source={props.placeImage}
                style={styles.image}
            />
            <Text style={styles.text}>
                {props.placeName}
            </Text>
        </View>
    </TouchableOpacity> 
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 30,
        height: 30
    },
    text: {
        marginLeft: 10
    }
});
 
export default listItem;