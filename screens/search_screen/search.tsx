import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button } from 'react-native'

import { Ionicons } from '@expo/vector-icons';


interface Props {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Ionicons style={styles.locationIcon} name="ios-location-outline" size={24} color="black" />
      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.logoText}>AirOMeter</Text>
      <  TextInput
        placeholder='Enter City Name'
        //onChangeText={text => setCity(text)}
        onChangeText={props.setCity}
        value={props.city}
      />
      <Button title='Search' />
    </View>
  )
};

export default Search;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationIcon: {
    alignSelf: 'flex-end',
  },
  logo: {
    height: 50,
    width: 50,
  },
  logoText: {
    fontSize: 30,
  }

})