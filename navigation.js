import React from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import Order from "./screens/Order";
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from "./redux/store";

const store = configureStore();

export default function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };
    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='RestaurantDetails' component={RestaurantDetails}/>
                    <Stack.Screen name='Order' component={Order}/>
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>


    );
}