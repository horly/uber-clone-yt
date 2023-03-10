import React from 'react'
import { FlatList, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from '@rneui/themed'; //react native element design
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '123',
        title: "Get a ride",
        image:  require('../assets/img/car.png'),
        screen: "MapScreen",
    },
    {
        id: '456',
        title: "Order food",
        image:  require('../assets/img/food.png'),
        screen: "EatsScreen",
    }
];

const NavOptions = () => {
    const navigation = useNavigation();

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={ (item) => item.id }
                horizontal
                renderItem={ ({item}) => (
                    <TouchableOpacity 
                        onPress={() => navigation.navigate(item.screen)}
                        style={ tw`p-2-pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40` }
                    >
                        <View>
                            <Image
                                style={ styles.optionImg }
                                source={ item.image }
                            />
                            <Text style={tw`mt-2 text-lg font-semibold`}>{ item.title }</Text>
                            <Icon 
                                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                                type='antdesign' name='arrowright' color="white" 
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default NavOptions

const styles = StyleSheet.create({
    optionImg:{
        width: 120, 
        height: 120, 
        resizeMode: 'contain'
    }
});


