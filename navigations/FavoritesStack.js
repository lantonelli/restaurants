import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Favorites from '../screens/Favorites'


export default function RestaurantsStack() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="favorites"
                component = {Favorites}
                options={{title: "Favoritos"}}
            />
        </Stack.Navigator>
    )
}
