import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Switch } from 'react-native-paper';
import Colors from '../constants/Colors';

const FiltersSwitch = props => {
    return ( 
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch 
            trackColor={{true: Colors.primaryColor}}
            thumbColor={Colors.primaryColor}
            value={props.state}
            onValueChange={props.onChange}
        />
    </View> 
    );
}

const FilterScreen = props => {
    const [isGlutenFree, setIsGluteenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    return ( 
        <View style = {styles.screen}>
            <Text style={styles.title}>Available Options</Text>
            <FiltersSwitch label='Gluten Free' state={isGlutenFree} onChange={newValue => setIsGluteenFree(newValue)}/>
            <FiltersSwitch label='Lactose Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)}/>
            <FiltersSwitch label='Vegan Free' state={isVegan} onChange={newValue => setIsVegan(newValue)}/>
            <FiltersSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)}/>
        </View>
     );
}


FilterScreen.navigationOptions = (navDate) => {
    return {
            headerTitle: 'Filter Your Category ',
            headerLeft: (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title="Menu" 
                        iconName="ios-menu" 
                        onPress={()=>{
                            navDate.navigation.toggleDrawer();
                        }
                    }/>
                </HeaderButtons>
            )
        }
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    }, 
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
        width: '80%',
        marginVertical: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    }
});
 
export default FilterScreen;