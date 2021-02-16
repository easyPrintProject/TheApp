
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Logo() {
    return (
        <View style={styles.container}>
         <Image
        source={
          require("../assets/images/icon.png")
        }
        resizeMode="contain"
        style={styles.Header__logo}
        ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    Header__logo: {
      flex: 1,
      width: 200,
     
    },
  });
  