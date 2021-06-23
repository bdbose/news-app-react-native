/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './src/pages/Main';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTintColor: 'white',
          }}
          name="NewsToday"
          component={Main}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const Check = () => {
//   return <Text>Hello</Text>;
// };

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
  },
});

export default App;
