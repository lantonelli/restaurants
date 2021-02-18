import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRestaurants from '../screens/TopRestaurants'


export default function RestaurantsStack() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"
                component = {TopRestaurants}
                options={{title: "Top 5"}}
            />
        </Stack.Navigator>
    )
}
