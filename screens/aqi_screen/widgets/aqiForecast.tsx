import { View } from 'react-native'
import React from 'react'

const aqiForecast = (aqiNum: number) => {
  switch (true) {
    case (aqiNum <= 50):
      return <View style={{ backgroundColor: "#19740d", height: "16.66%", width: 50 }}></View>
    case (aqiNum <= 100):
      return <View style={{ backgroundColor: "#ffd60a", height: "32.32%", width: 50 }}></View>
    case (aqiNum <= 150):
      return <View style={{ backgroundColor: "#e7771b", height: "49.98%", width: 50 }}></View>
    case (aqiNum <= 200):
      return <View style={{ backgroundColor: "#eb0a24", height: "66.64%", width: 50 }}></View>
    case (aqiNum <= 300):
      return <View style={{ backgroundColor: "#6a0674", height: "83.3%", width: 50 }}></View>
    case (aqiNum >= 301):
      return <View style={{ backgroundColor: "#5f0f40", height: "99%", width: 50 }}></View>
    default:
      return <View style={{ backgroundColor: "#808080", height: "99%", width: 50 }}></View>
  }
}


export default aqiForecast;