import React, { Component } from 'react';
import { View, Text, Button, TextInput, FlatList, StyleSheet } from 'react-native';
import loadTabs from '../openTabs';
import Icon from 'react-native-vector-icons/AntDesign';

class AuthScreen extends Component {
    loginHandler = () => {
      loadTabs();
    }

    render () {
        const foods = [
            {
                key: 1,
                description: 'Chiken Wings'
            },
            {
                key: 2,
                description: 'Soup asd asd as das dasd asd asd'
            },
            {
                key: 3,
                description: 'Traallala '
            },
        ]
        return (
            // <View>
            //     <Text>Auth Screen</Text>
            //     <Button title='Switch to Login' onPress={this.loginHandler}/>
            //     <TextInput placeholder='Your E-Mail Address'/>
            //     <TextInput placeholder='Password'/>
            //     <TextInput placeholder='Confirm Password'/>
            //     <Button title='Submit' onPress={this.loginHandler}/>
            // </View>
            <View style={{flex: 1, backgroundColor: 'lightgrey', padding: 10}}>
                <FlatList
                    style={styles.container}
                    data={foods}
                    keyExtractor={(item) => item.key.toString()}
                    ListHeaderComponent={()=> (
                        <Text style={{fontSize: 30}}>FOODS</Text>
                    )}
                    renderItem={(info) => (
                        <View style={{flex: 1, height: '20%', marginTop: 10, backgroundColor: 'white', borderLeftWidth: 5, borderRadius: 5, borderColor: 'green', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                            <Text style={{ fontSize: 20}}>{info.item.description}</Text>
                            <Icon name='pluscircleo' size={30} color='green'/>
                        </View>
                    )}
                />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        
    }
});

export default AuthScreen;

