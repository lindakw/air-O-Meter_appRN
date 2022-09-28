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
import * as Location from "expo-location";

import { Ionicons } from "@expo/vector-icons";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../../App";

import { useDispatch } from 'react-redux';

import { getCity } from "../../api/cityNameSlice";

type SearchScreenProps = NativeStackScreenProps<StackParamList, "Search">;

const Search: FC<SearchScreenProps> = (props) => {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied"); useEffect(() => {
          (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
              alert("Permission to access location was denied");
            }

            let currentLocation: any = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
          })();
        }, []);
      }

      let currentLocation: any = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
    })();
  }, []);

  const submitHandler = () => {
    if (city === "") {
      Alert.alert("Can't leave blank. Please enter a city.")
    } else {
      props.navigation.push("Main");
      dispatch(getCity(city))
      console.log("This is Search page ====> " + city)
      setCity("");
    }

  }
  return (
    <View style={styles.container}>


      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <Text style={styles.logoText}>AirOMeter</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter City Name"
          onChangeText={setCity}
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
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLefWidth: 1,
    padding: 7,
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
