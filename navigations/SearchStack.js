import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Search from '../screens/Search'


export default function RestaurantsStack() {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="search"
                component = {Search}
                options={{title: "Buscar"}}
            />
        </Stack.Navigator>
    )
}
