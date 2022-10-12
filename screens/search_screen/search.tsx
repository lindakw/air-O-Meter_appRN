import React, { useState, useEffect, FC } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { Entypo } from '@expo/vector-icons';
import * as Location from "expo-location";


import { Ionicons } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

import { useDispatch } from 'react-redux';

import { setCity, setLocation, setUseLocationData } from "../../api/locationSlice";

type SearchScreenProps = NativeStackScreenProps<StackParamList, "Search">;

const Search: FC<SearchScreenProps> = (props) => {
  const [location, setLocationLocal] = useState("");
  const [city, setCityLocal] = useState("");

  const dispatch = useDispatch()

  const getMyLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status === "granted") {
      let currentLocation = await Location.getCurrentPositionAsync({});

      let latitude = currentLocation.coords.latitude;
      let longitude = currentLocation.coords.longitude;

      let userLocation = latitude + ";" + longitude;

      // If user grants location access, switch over to using location data
      setLocationLocal(location);
      dispatch(setLocation(userLocation));
      dispatch(setUseLocationData(true));
      props.navigation.push("Main");
    }
    else {
      alert("Permission to access location was denied");
    }
  }

  const submitHandler = () => {
    if (city === "") {
      Alert.alert("Can't leave blank. Please enter a city.")
    } else {
      props.navigation.push("Main");
      dispatch(setCity(city));
      dispatch(setUseLocationData(false));
      setCityLocal("");
    }
  }

  return (
    <View style={styles.container}>
     <Pressable onPress={getMyLocation} style={styles.locationIcon}>
     <Entypo name="location-pin" size={24} color="black" />
      </Pressable> 
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.logoText}>AirOMeter</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter City Name"
          onChangeText={setCityLocal}
          value={city}
          style={styles.input}
        />
        <Pressable style={styles.searchIcon}>
          <Ionicons name="ios-search" size={24} color="black" />
        </Pressable>
      </View>

      <Pressable onPress={submitHandler} style={styles.button}><Text style={styles.buttonText}>Search</Text></Pressable>

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  locationIcon: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 40,
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    padding: 10,
  },
  searchIcon: {
    borderWidth: 1,
    padding: 7,
    height: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#19C3FB",

  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
