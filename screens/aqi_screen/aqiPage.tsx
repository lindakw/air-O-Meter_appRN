import React, { FC } from "react";
import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';

type AQIScreenProps = NativeStackScreenProps<StackParamList, "Main">;

const Aqi: FC<AQIScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/air2.jpeg")} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
        <View style={styles.topNav}>
          <Pressable
            style={styles.backIcon}
            onPress={() => props.navigation.push("Search")}
          ><Ionicons name="chevron-back-outline" size={36} color="black" /></Pressable>

          <Pressable style={styles.searchIcon}>
            <Ionicons name="ios-search" size={36} color="black" />
          </Pressable>

          <Ionicons name="information" size={36} color="black" />

        </View>
        <Text style={styles.title}>AirOMeter</Text>
        <Text style={styles.cityName}>Fresno</Text>
        <View style={styles.aqiCircle}>
          <View style={styles.aqiTextContainer}>
            <Text style={styles.aqiTextTitle}>AQI</Text>
            <Text style={styles.aqiTextNum}>35</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Aqi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center"
  },
  topNav: {
    marginTop: 30,
    flexDirection: "row",
    padding: 0,
    height: 50
  },
  backIcon: {
    alignItems: "flex-start",
    marginRight: 275
  },
  searchIcon: {

  },
  title: {
    textAlign: "center",
    margin: 10,
  },
  cityName: {
    textAlign: "center",
    margin: 10
  },
  aqiCircle: {
    alignSelf: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "#ff7e00",
    marginTop: 15,
    padding: 0,
  },
  aqiTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 0,
  },
  aqiTextTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    marginTop: -25,
  },
  aqiTextNum: {
    fontSize: 36,
    fontWeight: "600",
  }
})