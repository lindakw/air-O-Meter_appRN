import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const IndexPage = () => {
  return (
    <View style={styles.container}>
    
    <Text>Index Page</Text>
    </View>
  )
}

export default IndexPage

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  }
})