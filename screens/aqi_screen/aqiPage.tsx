import React, { FC } from "react";
import { Text, View, StyleSheet, ImageBackground, Pressable } from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
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
            onPress={() => props.navigation.goBack()}
          ><Ionicons name="chevron-back-outline" size={36} color="black" /></Pressable>

          <Pressable onPress={() => props.navigation.navigate("Search")}>
            <Ionicons name="ios-search" size={32} color="black" />
          </Pressable>

          <Pressable>
            <Ionicons name="information" size={36} color="black" />
          </Pressable>
        </View>


        <Text style={styles.title}>AirOMeter</Text>
        <Text style={styles.cityName}>Fresno</Text>


        <View style={styles.aqiCircle}>
          <View style={styles.aqiTextContainer}>
            <Text style={styles.aqiTextTitle}>AQI</Text>
            <Text style={styles.aqiTextNum}>35</Text>
          </View>
        </View>

        <Text style={styles.aqiInfoText}>Good</Text>


        <View style={styles.aqiInfoBox}>
          <MaterialIcons name="perm-device-info" style={styles.phoneIcon} size={36} color="black" />
          <Text style={styles.aqiTextAdvice}>The air quality is good! It's a nice day to go for a run outside!</Text>
        </View>

        <Text style={styles.forecastTitle}>Forecast</Text>
        <View style={styles.aqiInfoBox}>
          <View style={styles.forecastDay}>
            <Text>Tuesday</Text>
            <View style={styles.aqiDayColor}>

            </View>
          </View>
          <View style={styles.forecastDay}>
            <Text>Wednesday</Text>
            <View style={styles.aqiDayColor}>

            </View>
          </View>
          <View style={styles.forecastDay}>
            <Text>Thursday</Text>
            <View style={styles.aqiDayColor}>

            </View>
          </View>

        </View>

        <View style={styles.bottomWidgetContainer}>
          <View style={styles.widgetBox}>
            <Text>Pollen</Text>
            <View style={styles.smallCircle}>
              <Text style={styles.widgetText}>61</Text>
            </View>
          </View>
          <View style={styles.widgetBox}>
            <Text>UV Index</Text>
            <View style={styles.smallCircle}>
              <Text style={styles.widgetText}>2</Text>
            </View>
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
    marginTop: -10,
    marginBottom: 5,
  },
  cityName: {
    textAlign: "center",
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
  },
  aqiInfoText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  aqiInfoBox: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, .5)",
    width: 350,
    height: 100,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
  },
  phoneIcon: {
    marginLeft: 25,
  },
  aqiTextAdvice: {
    marginLeft: 10,
    padding: 15,
    width: 250,
  },
  forecastTitle: {
    fontSize: 16,
    margin: 15,
    textAlign: "center",
  },
  forecastDay: {
    margin: 25,
    alignItems: "center"
  },
  aqiDayColor: {
    backgroundColor: "orange",
    width: 50,
    height: 75,
  },
  bottomWidgetContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  widgetBox: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    width: 155,
    height: 100,
    paddingBottom: 5,
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  smallCircle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
  },
  widgetText: {
    fontSize: 22,
  }
})