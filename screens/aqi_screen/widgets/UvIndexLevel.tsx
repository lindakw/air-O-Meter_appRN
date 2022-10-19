
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../Colors'
  
    const uvIndexLevel = (uvIndex: number) => {
    switch (true) {
      case (uvIndex >= 0 && uvIndex <=2):
        return <View  style={[styles.uvCircle, { backgroundColor: Colors.green}]}></View>
      case (uvIndex<=5 && uvIndex>=3 ):
        return <View style={[styles.uvCircle, { backgroundColor: Colors.yellow}]}></View>
      case (uvIndex<=7 && uvIndex>=6 ):
        return <View style={[styles.uvCircle, { backgroundColor: Colors.orange}]}></View>
      case (uvIndex<=10 && uvIndex>=8 ):
        return <View style={ [styles.uvCircle, { backgroundColor: Colors.red}]}></View>
      case (uvIndex>=11  ):
        return <View style={ [styles.uvCircle, { backgroundColor: Colors.purple}]}></View>
      default:
        return <View style={[styles.uvCircle, { backgroundColor: "#808080" }]}></View>
    }
  }
 
export default uvIndexLevel

const styles = StyleSheet.create({
    uvCircle:{
      width: 75,
      height: 75,
      borderRadius: 75 / 2,
      zIndex:-100
 
   
  
   

    }
})
 