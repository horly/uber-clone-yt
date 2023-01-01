import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';

/**
 * 1) installation de Redux
 * # NPM
 * - npm install @reduxjs/toolkit
 * - npm install react-redux
 * # YARN
 * - yarn add @reduxjs/toolkit
 * Docs : https://redux.js.org/introduction/getting-started
 */

export default function App() {
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <Text>This is my app</Text>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
