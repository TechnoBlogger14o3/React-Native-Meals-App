import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {
            headerStyle: {
                backgroundColor: Colors.accentColor
            },
            headerTintColor: 'white'
        }
    },
    MealDetail: MealDetailsScreen
}, {
    mode: 'card',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

export default createAppContainer(MealsNavigator);