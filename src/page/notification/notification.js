import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from 'toggle-switch-rn'
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get("screen");

const Main = ({ navigation }) => {


const data1 = [{data1},{data1},{data1}];   


  return ( 
    <View style={styles.container}>
        <SafeAreaView/>

        <View style={{width:width,height:height*0.9}}>
        
        
     <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       flexDirection:"row",
       }}>
         <TouchableOpacity
           onPress={()=>{navigation.navigate('Home')}}
           style={{width:width*0.1,alignItems:"flex-end"}}>
             <Ionicons name="caret-back-circle" size={25} color="black" />
          </TouchableOpacity>
         <View style={{width:width*0.8,alignItems:"center"}}>
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>การแจ้งเตือน</Text>
         </View>           
     </View>
    </View>
    </View>
  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,height,backgroundColor:"#ffff",alignItems:"center"
  },
  Text13:{fontFamily:"Prompt-Regular",fontSize:13,color:"#444444"},
  Text16:{fontFamily:"Prompt-Regular",fontSize:16,color:"#444444"},
  BoxDetail:{width:width*0.8,flexDirection:"row",marginTop:10},
});
