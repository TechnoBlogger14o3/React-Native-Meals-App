import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavouritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return <MealList listData={favMeals} navigation={props.navigation}/>;
}

FavouritesScreen.navigationOptions = (navDate) => {
    return {
            headerTitle: 'Favourite Meals',
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


export default FavouritesScreen;