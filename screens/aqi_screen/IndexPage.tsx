import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { FC } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { StackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Colors} from './Colors'
type IndexPageScreenProps = NativeStackScreenProps<StackParamList, "IndexPage">;

const IndexPage: FC<IndexPageScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImg}
        source={require("../../assets/cloudSky3.jpg")}
      />
      <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
        <Pressable
          style={styles.backIcon}
          onPress={() => props.navigation.push("Main")}
        >
          <Ionicons name="chevron-back-outline" size={30} color="black" />
        </Pressable>
        <Pressable style={styles.closeIcon}
        onPress={() => props.navigation.push("Main")} 
        
        >
           <AntDesign  name="close" size={25} color="red" />
        </Pressable>
       
      </View>

      <View style={styles.cardWrapper}>
        <Text style={styles.title}>Air Quality Index</Text>
        <View style={[styles.cardIndexInfo, { backgroundColor: Colors.green}]}  
        >
          <Text style={styles.indexText}>0-50</Text>
          <Text style={styles.indexText}>Good</Text>
        </View>
        <View style={[styles.cardIndexInfo, { backgroundColor: Colors.yellow} ]}>
          <Text style={styles.indexText}>51-100</Text>
          <Text style={styles.indexText}>Moderate</Text>
        </View>
        <View style={[styles.cardIndexInfo,{ backgroundColor: Colors.orange}]}>
          <Text style={styles.indexText}>101-150</Text>
          <Text style={styles.indexTxt}>Unhealthy for Sensitive Groups</Text>
        </View>
        <View style={[styles.cardIndexInfo, { backgroundColor: Colors.red}]}>
          <Text style={styles.indexText}>151-200</Text>
          <Text style={styles.indexText}>Unhealthy</Text>
        </View>
        <View style={[styles.cardIndexInfo, { backgroundColor: Colors.purple}]}>
          <Text style={styles.indexText}>201-300</Text>
          <Text style={styles.indexText}>Very Unhealthy</Text>
        </View>
        <View style={[styles.cardIndexInfo,{ backgroundColor: Colors.brown}]}>
          <Text style={styles.indexText}>300+</Text>
          <Text style={styles.indexText}>Hazardous</Text>
        </View>
      </View>
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indexText: {
    fontSize: 14,
    color: '#fff'
   
  },
  indexTxt: {
    flexWrap: "wrap",
    textAlign:'center',
    fontSize: 14,
    marginLeft: 45,
    color: '#fff'
    
  },
  title: {
    textAlign: "center",
    margin: 30,
    fontSize: 25,
  },
  backIcon: {
    marginTop: -730,
    marginLeft:22,

 },
  closeIcon:{
    marginTop:-730,
    marginRight:25
  },
  bgImg: {
    height: "100%",
    width: "100%",
  },
  
  cardWrapper: {
    backgroundColor: "rgba(255, 255, 255, .5)",
    position: "absolute",
    top: 140,
    left: 14,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    height: 550,
    width: 370,
  },
  cardIndexInfo:{
    width: 335,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 17,
    borderRadius: 5,
    marginLeft: 19,
    color: '#fff'
  }
});
