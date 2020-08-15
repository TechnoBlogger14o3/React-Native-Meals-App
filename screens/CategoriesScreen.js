import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity 
                style = {styles.gridItemStyle}
                onPress={() => {
                props.navigation.navigate({ 
                    routeName: 'CategoryMeals',
                    // Passing Data through Params
                    params: {
                        categoryId: itemData.item.id
                    }
                });
            }}>
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return ( 
        <FlatList 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2}
        /> 
    );
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    gridItemStyle: {
        flex: 1,
        margin: 15,
        height: 150,

    }
});

 
export default CategoriesScreen;