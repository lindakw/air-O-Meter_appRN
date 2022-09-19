import React, { FC } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import { Ionicons } from "@expo/vector-icons";


const Aqi: FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/air2.jpeg")} resizeMode="cover" style={{ width: "100%", height: "100%" }}>
        <Text>hello</Text>
      </ImageBackground>

    </View>
  )
}

export default Aqi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})