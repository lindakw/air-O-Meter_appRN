import { Text, StyleSheet } from 'react-native'
import React from 'react'

const aqiText = (aqiNum: number) => {
  switch (true) {
    case (aqiNum <= 50):
      return <Text style={styles.aqiText}>Air pollution poses little to no risk to health. Today is a good day to go outside.</Text>
    case (aqiNum <= 100):
      return <Text style={styles.aqiText}>Air pollution may be a risk for those who are unusually sensitive.</Text>
    case (aqiNum <= 150):
      return <Text style={styles.aqiText}>The air quality is unhealthy for those sensitive to air pollution. It is recommended that those who are sensitive to air pollution stay indoors.</Text>
    case (aqiNum <= 200):
      return <Text style={styles.aqiText}>Some people may experience health effects due to high levels of air pollution. It is recommended that outdoor activity be restricted.</Text>
    case (aqiNum <= 300):
      return <Text style={styles.aqiText}>There is a high risk of health effects for everyone. It is recommend for everyone to stay indoors!</Text>
    case (aqiNum >= 301):
      return <Text style={styles.aqiText}>The air quality is hazardous today! There is a health warning for everyone. Please stay inside!</Text>
    default:
      return <Text style={styles.aqiText}>None</Text>
  }
}


export default aqiText;

const styles = StyleSheet.create({
  aqiText: {
    marginLeft: 10,
    padding: 15,
    width: 250,
  },
})