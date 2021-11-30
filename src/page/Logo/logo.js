import { StatusBar } from "expo-status-bar";
import React, {useRef, useState,useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,Image,ImageBackground,TextInput
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get("window");

export default function App({ navigation, route }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home")
    }, 1000); 
  }, [])
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate("Home")}
    style={styles.container}>
    <SafeAreaView style={{backgroundColor:"#ffff"}} />

    <View   
     onPress={() => navigation.navigate("Home")}
     style={{
        width:width,
        height:height*0.9,   
        alignItems:"center",
        justifyContent:"center"          
        }}>
             <Image resizeMode={"cover"} style={{width:190,height:158}} source={require("../../img/Logo.png")}/>  
                    
        </View>
        <Image resizeMode={"cover"} style={{width:111,height:38,alignSelf:"center"}} source={require("../../img/LogoMore.png")}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor:"#F4F7FE"
  }, 
});
