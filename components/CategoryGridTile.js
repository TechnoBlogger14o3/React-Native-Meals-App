import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >=21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return ( 
        <View style = {styles.gridItemStyle}>
            <TouchableCmp 
                style={{flex:1}}
                onPress={props.onSelect}>
                <View style = {{...styles.container, ...{ backgroundColor: props.color}}}>
                    <Text style = {styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp> 
        </View>
    );
}

const styles = StyleSheet.create({
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10, 
        overflow: 'hidden',
        elevation: 5,
    }, 
    container: {
        flex: 1, 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10
    }, 
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});
 
export default CategoryGridTile;