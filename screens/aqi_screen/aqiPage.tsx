import React, { FC } from "react";
import { Text, View, StyleSheet, ImageBackground, Pressable, ScrollView, Platform } from "react-native";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../../App';

import { useGetAQIQuery, useGetLocationQuery } from "../../api/airQualityAPI";

import { useSelector } from 'react-redux';
import { RootState } from "../../app/store";

import aqiText from './widgets/aqiText';
import aqiLevel from './widgets/aqiLevel';
import aqiForecast from './widgets/aqiForecast';
import aqiCircle from './widgets/aqiMainCircle';
import uvIndexLevel from './widgets/UvIndexLevel'
type AQIScreenProps = NativeStackScreenProps<StackParamList, "Main">;

const Aqi: FC<AQIScreenProps> = (props) => {

  let aqiCity = useSelector((store: RootState) => store.location.cityName);
  let aqiLocation = useSelector((store: RootState) => store.location.locationInfo);
  let useLocation = useSelector((store: RootState) => store.location.useLocationData);

  let { data, error, isLoading } = useLocation ? useGetLocationQuery(aqiLocation) : useGetAQIQuery(aqiCity);

  const aqiInfo = data?.data;
  
  let currentCity = aqiInfo?.city?.name
  const currentLocation = currentCity?.replace(/[^a-zA-Z0-9 ]/g, ' ');
  let city= currentLocation?.split('  ')[0]



  const cityName = aqiCity.toUpperCase();

  const dayname = (date: string) => {

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dt = new Date(date);
    const day = dt.getDay();
    return days[day];
  };


  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.aqiInfoText}>Loading...</Text>
      </View>
    )
  }
  

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/air2.jpeg")} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
        <ScrollView>
          <View style={styles.topNav}>
            <View style={styles.topLeftNav}>
              <Pressable onPress={() => props.navigation.navigate("Search")}>
                <Ionicons name="chevron-back-outline" size={36} color="black" />
              </Pressable>
            </View>

            <View style={styles.topRightNav}>
              <Pressable onPress={() => props.navigation.navigate("Search")}>
                <Ionicons name="ios-search" size={30} color="black" />
              </Pressable>

              <Pressable onPress={() => props.navigation.push('IndexPage')}>
                <Ionicons name="information" size={36} color="black" />
              </Pressable>
            </View>

          </View>


          <Text style={styles.title}>AirOMeter</Text>
          <Text style={styles.cityName}>{aqiInfo ? city: "N/A"}</Text>

          <View style={styles.aqiTextContainer}>
            {aqiInfo ? aqiCircle(aqiInfo.aqi) : "N/A"}
            <Text style={styles.aqiTextTitle}>AQI</Text>
            <Text style={styles.aqiTextNum}>{aqiInfo ? aqiInfo.aqi : "N/A"}</Text>
          </View>

          <Text style={styles.aqiDesc}>{aqiInfo ? aqiLevel(aqiInfo.aqi) : "N/A"}</Text>



          <View style={styles.aqiInfoBox}>
            <MaterialIcons name="perm-device-info" style={styles.phoneIcon} size={36} color="black" />
            <Text style={styles.aqiInfoText}>{aqiInfo ? aqiText(aqiInfo.aqi) : "N/A"}</Text>
          </View>

          <Text style={styles.forecastTitle}>Forecast</Text>

          <View style={styles.aqiInfoBox}>

            <View style={styles.forecastDay}>

              <View style={styles.dailyInfo}>
                <Text>{aqiInfo ? dayname(aqiInfo.forecast.daily.pm25[4].day) : "N/A"}</Text>
                <Text>{aqiInfo ? aqiInfo.forecast.daily.pm25[4].avg : "N/A"}</Text>
              </View>

              <View style={styles.dailyInfoBar}>
                {aqiInfo ? aqiForecast(aqiInfo.forecast.daily.pm25[4].avg) : <Text>N/A</Text>}
              </View>

            </View>

            <View style={styles.forecastDay}>

              <View style={styles.dailyInfo}>
                <Text>{aqiInfo ? dayname(aqiInfo.forecast.daily.pm25[5].day) : "N/A"}</Text>
                <Text>{aqiInfo ? aqiInfo.forecast.daily.pm25[5].avg : "N/A"}</Text>
              </View>

              <View style={styles.dailyInfoBar}>
                {aqiInfo ? aqiForecast(aqiInfo.forecast.daily.pm25[5].avg) : <Text>N/A</Text>}
              </View>

            </View>

            <View style={styles.forecastDay}>

              <View style={styles.dailyInfo}>
                <Text>{aqiInfo ? dayname(aqiInfo.forecast.daily.pm25[6].day) : "N/A"}</Text>
                <Text>{aqiInfo ? aqiInfo.forecast.daily.pm25[6].avg : "N/A"}</Text>
              </View>

              <View style={styles.dailyInfoBar}>
                {aqiInfo ? aqiForecast(aqiInfo.forecast.daily.pm25[6].avg) : <Text>N/A</Text>}
              </View>

            </View>

          </View>

          <View style={styles.bottomWidgetContainer}>
            <View style={styles.widgetBox}>
                <Text>UV Avg</Text>
                  <Text style={styles.widgetText}>{aqiInfo ? aqiInfo.forecast.daily?.uvi[0].avg : "N/A"}</Text>
              <View>
                <Text>{aqiInfo ? uvIndexLevel(aqiInfo?.forecast.daily?.uvi[0].avg) : "N/A"}</Text>
              </View>
            </View>

            <View style={styles.widgetBox}>
              <Text style={styles.uvIndexTitle}>UV Index</Text>
              <Text style={styles.widgetText}>{aqiInfo ? aqiInfo.forecast.daily.uvi[0].max : "N/A"}</Text>
              <View >
               
                <Text >{aqiInfo ? uvIndexLevel(aqiInfo.forecast.daily.uvi[0].max) : "N/A"}</Text>
              </View>
            </View>
          </View>
        </ScrollView>

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
    marginTop: "14%",
    flexDirection: "row",
    padding: 0,
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topLeftNav: {
  },
  topRightNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: "center",
    marginTop: -10,
    marginBottom: 5,
    fontSize: 25
  },
  cityName: {
    textAlign: "center",
    fontSize: 20,
  },
  aqiTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    padding: 0,
    marginTop: 15,
    marginBottom: 65,
  },
  aqiTextTitle: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
    marginTop: -150,
  },
  aqiTextNum: {
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
  },
  aqiDesc: {
    textAlign: "center",
    margin: 10,
  },
  aqiInfoText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    width: 300,
  },
  aqiInfoBox: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, .5)",
    width: 380,
    height: 115,
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  phoneIcon: {
    marginLeft: 25,
  },
  forecastTitle: {
    fontSize: 16,
    margin: 15,
    textAlign: "center",
  },
  forecastDay: {
    flex: 1,
    height: "100%",
    marginHorizontal: 25,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dailyInfo: {
    alignItems: "center",
    height: "35%",
  },
  dailyInfoBar: {
    height: "65%",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  bottomWidgetContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  widgetBox: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    width: "36%",
    height: 100,
    paddingBottom: 5,
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  uvIndexTitle: {
    
  },
  widgetText: {
    fontSize: 25,
    zIndex:100,
    marginTop:14,
    // marginLeft:15,
    // backgroundColor:'red',
    marginBottom:-50,
    color:'rgb(15, 9, 9)'
    
  }
})