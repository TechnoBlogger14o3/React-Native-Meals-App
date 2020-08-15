import React from 'react';
import { View, StyleSheet } from 'react-native';

const FavouriteScreen = props => {
    return ( 
        <View style = {styles.screen}>
            <Text> Favourites Screen </Text>
        </View>
     );
}
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouriteScreen;