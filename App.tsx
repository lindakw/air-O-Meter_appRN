import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Search from './screens/search_screen/search';
import Aqi from './screens/aqi_screen/aqiPage';

import { StyleSheet, View } from 'react-native';

export default function App() {
  const [city, setCity] = useState("");
  return (

    <View style={styles.container}>
      <Provider store={store}>
        <Search
          setCity={setCity}
          city={city}
        />
        <Aqi />
      </Provider>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
})