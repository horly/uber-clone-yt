import React from 'react'
import { Text, View } from 'react-native'

const data = [
    {
        id: '123',
        title: "Get a ride",
        image:  "../assets/img/car.png",
        screen: "MapScreen",
    },
    {
        id: '456',
        title: "Order food",
        image:  "../assets/img/food.png",
        screen: "EatsScreen",
    }
];

const NavOptions = () => {
    return (
        <View>
            <Text>Hello word</Text>
        </View>
    )
}

export default NavOptions


