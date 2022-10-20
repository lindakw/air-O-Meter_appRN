import { Text, StyleSheet } from 'react-native'
import React from 'react'

const aqiLevel = (aqiNum: number) => {
  switch (true) {
    case (aqiNum <= 50):
      return <Text style={styles.aqiLevel}>Good</Text>
    case (aqiNum <= 100):
      return <Text style={styles.aqiLevel}>Moderate</Text>
    case (aqiNum <= 150):
      return <Text style={styles.aqiLevel}>Unhealthy for Sensitive Groups</Text>
    case (aqiNum <= 200):
      return <Text style={styles.aqiLevel}>Unhealthy</Text>
    case (aqiNum <= 300):
      return <Text style={styles.aqiLevel}>Very Unhealthy</Text>
    case (aqiNum >= 301):
      return <Text style={styles.aqiLevel}>Hazardous</Text>
    default:
      return <Text style={styles.aqiLevel}>None</Text>
  }
}


export default aqiLevel;

const styles = StyleSheet.create({
  aqiLevel: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
})