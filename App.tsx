import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Search from './screens/search_screen/search';
import Aqi from './screens/aqi_screen/aqiPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type StackParamList = {
  Search: undefined;
  Main: undefined;
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen
            name="Search"
            component={Search}
          />

          <Stack.Screen
            name="Main"
            component={Aqi}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>



  );
}
