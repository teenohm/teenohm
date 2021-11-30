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
           onPress={()=>{navigation.navigate('Namelist')}}
           style={{width:width*0.1,alignItems:"flex-end"}}>
             <Ionicons name="caret-back-circle" size={25} color="black" />
          </TouchableOpacity>
         <View style={{width:width*0.8,alignItems:"center"}}>
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>รายชื่อ</Text>
         </View>      
         <TouchableOpacity 
         onPress={()=>{navigation.navigate('Notification')}}
         style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>
         
     </View>
      <View style={{width:width,height:130,backgroundColor:"#E5E5E5"}}> 

      </View>
      <View style={{width:width*0.388,height:height*0.184,borderRadius:5,alignSelf:"center",justifyContent:"center",marginTop:-80}}>
        <Image resizeMode={"stretch"} style={{width:140,height:140,alignSelf:"center"}} source={require("../../img/Profile.png")}/>  
      </View>

      <View style={{alignItems:"center",marginTop:10}}>
       <Text style={styles.Text16}>นาย เจมส์ คอนเนอร์</Text>
       <Text style={styles.Text16}>เจมส์</Text>

      <View style={{width:width*0.8,flexDirection:"row",marginTop:15}}>
        <FontAwesome5 style={{marginRight:20}} name="user-alt" size={20} color="#C13B78"  />
        <Text style={styles.Text13}>รุ่นที่ 10 กลุ่ม ดาวลูกไก่   ( ประธานรุ่นฝ่ายฆราวาส ) {"\n"}ที่ปรึกษาประธานบริษัทเกม</Text>    
      </View>
      
      <View style={styles.BoxDetail}>
        <MaterialIcons style={{marginRight:20}} name="cake" size={20} color="#C13B78" />
        <Text style={styles.Text13}>01 มกราคม 2500</Text>
      </View>
     
      <View style={styles.BoxDetail}>
      <Ionicons style={{marginRight:20}} name="call" size={20} color="#C13B78" />
      <Text style={styles.Text13}>081 - 1111111</Text>
      </View>
      
      <View style={styles.BoxDetail}>
      <Entypo style={{marginRight:20}} name="mail" size={20} color="#C13B78" />
      <Text style={styles.Text13}>jamescorner1@gmail.com</Text>
      </View>
    
      <View style={styles.BoxDetail}>
      <Ionicons style={{marginRight:20}} name="ios-location-sharp" size={20} color="#C13B78" />
      <Text style={styles.Text13}>99/99 ซ.พหลโยทิน40 แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10900</Text>
      </View>

      <TouchableOpacity
          style={{width:width*0.488,height:height*0.065,backgroundColor:'#E5E5E5',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:20}}>
          <Text style={styles.Text13}>ต้องการโทร 081 - 1111111</Text>
        </TouchableOpacity>

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
