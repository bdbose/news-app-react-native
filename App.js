/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import Main from './src/pages/Main';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar animated={true} backgroundColor="#e85454" />
      <View
        style={{
          backgroundColor: '#ff4d4d',
          padding: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          NewsToday
        </Text>
      </View>
      <Main />
    </View>
  );
};

export default App;
