import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return ( 
        <View style = {styles.screen}>
            <Text> CategoriesMeal Screen </Text>
            <Button title="Go To Meals Details Screen" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }}/>
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

export default CategoryMealsScreen;