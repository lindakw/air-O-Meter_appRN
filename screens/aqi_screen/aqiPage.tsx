import React, { FC } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import { Ionicons } from "@expo/vector-icons";



const Aqi: FC = () => {
  return (
    <View style={styles.container}>
      <Text>hello</Text>
    </View>
  )
}

export default Aqi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})