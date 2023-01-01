import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import tw from 'twrnc';

/**
 * Tailwind React Native Classnames 🏄‍♂️
 * installation 
 * - npm install twrnc
 */

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={styles.logoImg}
                    source={require('../assets/img/Uber_logo_2018.png')}
                    //source={{ uri: "https://links.parareact.com/gzs", }}
                />
            </View>
        </SafeAreaView>
    )
};

export default HomeScreen;

const styles = StyleSheet.create({
    logoImg:{
        width: 100, 
        height: 100, 
        resizeMode: 'contain'
    }
});