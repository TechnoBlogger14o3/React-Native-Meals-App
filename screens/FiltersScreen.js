import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    return ( 
        <View style = {styles.screen}>
            <Text> Filter Screen </Text>
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
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 
export default FilterScreen;