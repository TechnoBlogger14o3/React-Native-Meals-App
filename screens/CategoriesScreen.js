import React from 'react';
import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({ 
                        routeName: 'CategoryMeals',
                        params: {
                            categoryId: itemData.item.id
                        }
                    });
                }} 
            />
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

CategoriesScreen.navigationOptions = (navDate) => {
    return {
            headerTitle: 'Meal Categories',
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
 
export default CategoriesScreen;