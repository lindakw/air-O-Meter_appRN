
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Colors'

const uvIndexLevel = (uvIndex: number) => {
  switch (true) {
    case (uvIndex >= 0 && uvIndex <= 64):
      return <View style={[styles.uvCircle, { backgroundColor: Colors.green }]}></View>
    case (uvIndex >= 65 && uvIndex <= 84):
      return <View style={[styles.uvCircle, { backgroundColor: Colors.yellow }]}></View>
    case (uvIndex >= 85 && uvIndex <= 104):
      return <View style={[styles.uvCircle, { backgroundColor: Colors.orange }]}></View>
    case (uvIndex >= 105 && uvIndex <= 124):
      return <View style={[styles.uvCircle, { backgroundColor: Colors.red }]}></View>
    case (uvIndex >= 374):
      return <View style={[styles.uvCircle, { backgroundColor: Colors.purple }]}></View>
    default:
      return <View style={[styles.uvCircle, { backgroundColor: "#808080" }]}></View>
  }
}

export default uvIndexLevel

const styles = StyleSheet.create({
  uvCircle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    zIndex: -100





  }
})
