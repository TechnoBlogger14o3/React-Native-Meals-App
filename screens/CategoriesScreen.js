import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    console.log(props);
    return ( 
        <View style = {styles.screen}>
            <Text> Categories Screen </Text>
            <Button title="Go to Meals Screen" onPress ={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals'})
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

 
export default CategoriesScreen;