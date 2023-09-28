import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import RecipeScreen from '../screens/RecipeScreen';
import Timer from '../screens/CookingTimer';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

/**
 * Create the Tab Navigator for navigation among different screens.
 */
const Tab = createBottomTabNavigator();

/**
 * All screen navigation using tabs with Ionicons icon embedded.
 */
function MyTabs(){
    return (
        <Tab.Navigator
            screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
                let iconName;
                if (route.name==='Home'){

                    iconName=focused
                        ? 'home':'home-outline'
                } else if (route.name==='Recipe'){
                    iconName=focused
                        ? 'reader':'reader-outline'
                } else if (route.name==='Timer'){
                    iconName=focused
                        ? 'timer':'timer-outline'
                } else if (route.name==='Search'){
                    iconName=focused
                        ? 'search':'search-outline'
                }
                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            },
            tabBarActiveTintColor:'pink',
            tabBarInactiveTintColor:'grey',
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Recipe" component={RecipeScreen} />
            <Tab.Screen name="Timer" component={Timer} />
            <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
    );
}

/**
 * Contains all navigation of screens
 */
export default function AppStack() {

    return (
        <NavigationContainer >
            <MyTabs />
        </NavigationContainer>
    );
}