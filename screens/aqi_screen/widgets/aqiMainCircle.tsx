import { View, StyleSheet } from 'react-native';
import React from 'react';


const aqiCircle = (aqiNum: number) => {
  switch (true) {
    case (aqiNum <= 50):
      return <View style={[styles.aqiCircle, { backgroundColor: "#19740d" }]}></View>
    case (aqiNum <= 100):
      return <View style={[styles.aqiCircle, { backgroundColor: "#ffd60a" }]}></View>
    case (aqiNum <= 150):
      return <View style={[styles.aqiCircle, { backgroundColor: "#e7771b" }]}></View>
    case (aqiNum <= 200):
      return <View style={[styles.aqiCircle, { backgroundColor: "#eb0a24" }]}></View>
    case (aqiNum <= 300):
      return <View style={[styles.aqiCircle, { backgroundColor: "#6a0674" }]}></View>
    case (aqiNum >= 301):
      return <View style={[styles.aqiCircle, { backgroundColor: "#5f0f40" }]}></View>
    default:
      return <View style={[styles.aqiCircle, { backgroundColor: "#808080" }]}></View>
  }
}

export default aqiCircle;
 
const styles = StyleSheet.create({
  aqiCircle: {
    alignSelf: "center",
    alignItems: "center",
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: "#ff7e00",
    padding: 0,
  },
})