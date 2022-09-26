import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import Search from './screens/search_screen/search';

import { useGetAQIQuery } from './api/airQualityAPI';
import Aqi from './screens/aqi_screen/aqiPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexPage from './screens/aqi_screen/IndexPage';


export type StackParamList = {
  Search: undefined;
  Main: undefined;
  IndexPage:undefined
}

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

  const [city, setCity] = useState("");

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
          <Stack.Screen
            name= "IndexPage"
            component={IndexPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>



  );
}
