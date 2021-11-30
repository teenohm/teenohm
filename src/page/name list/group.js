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

const Main = ({ navigation,route }) => {
    const Nameheader = route.params.item
    // console.log(Nameheader);


const data = [{data2:"กรรมการโครงการ"},{data2:"ซูเปอร์แม่ไก่"},{data2:"แม่ไก่"},{data2:"ลูกไก่"}];

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
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>{Nameheader.data2}</Text>
         </View>           
     </View>
     <View style={{height:height*0.48,backgroundColor:"#ffff",alignItems:'center'}}>                    
          
          <FlatList
            data={data}        
            renderItem={({item}) => {
              return (
               
          <TouchableOpacity
            onPress={()=>{navigation.navigate('Userdetail')}}
             style={{width:width*0.85,height:height*0.100,alignItems:"center",alignItems:"center",marginVertical:5,flexDirection:"row"}}>
              <View style={styles.BoxProfile}></View>
              
              <View style={{width:200,height:height*0.072,paddingLeft:10}}>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>ชื่อ นามสกุล</Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>สมาชิก</Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>รุ่นที่ 1 </Text>
              </View>
              
            </TouchableOpacity>                          
              );
            }}
          />
          
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
  BoxProfile:{width:width*0.152,height:height*0.072,borderWidth:1,borderRadius:5,backgroundColor:"#ffff",borderColor:"#707070"},
});
