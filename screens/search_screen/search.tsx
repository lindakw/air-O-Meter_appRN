import React, { useState, FC } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Pressable, Alert } from 'react-native'

import { Ionicons } from '@expo/vector-icons';

import { useGetAQIQuery } from "../../api/airQualityAPI";

interface Props {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = (props) => {

  const { data, error, isLoading, isError } = useGetAQIQuery(props.city); //props.city

  const submitHandler = () => {
    if (props.city === "") {
      Alert.alert("Can't leave blank. Please enter a city.")
    } else {
      return props.setCity(props.city);
    }
  }

  console.log(data);

  return (
    <View style={styles.container}>
      <Pressable style={styles.locationIcon} >
        <Ionicons name="ios-location-outline" size={34} color="black" />
      </Pressable>

      <Image
        style={styles.logo}
        source={require("../../assets/logo.png")}
      />
      <Text style={styles.logoText}>AirOMeter</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter City Name'
          onChangeText={props.setCity}
          value={props.city}
          style={styles.input}
        />
        <Pressable style={styles.searchIcon}>
          <Ionicons name="ios-search" size={24} color="black" />
        </Pressable>

      </View>

      <Pressable onPress={submitHandler} style={styles.button}><Text style={styles.buttonText}>Search</Text></Pressable>
      {isLoading && <Text>"Loading..."</Text>}
    </View>
  )
};

export default Search;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationIcon: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
  logo: {
    height: 150,
    width: 150,
    marginTop: 40,
  },
  logoText: {
    fontSize: 30,
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: "80%",
    marginVertical: 20,
    //margin: 12,
    //borderWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
  },
  searchIcon: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLefWidth: 1,
    padding: 7,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})