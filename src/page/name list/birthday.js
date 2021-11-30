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
             <FontAwesome  name="bell" size={20} color="black" />
          </TouchableOpacity>       
        </View>

        <View style={{width:width*0.863,flexDirection:"row",justifyContent:"space-between",alignSelf:"center",marginVertical:10}}>
           <Text style={{fontSize:14,fontFamily:'Prompt-Bold'}}>สมาชิกที่เกิดวันนี้</Text>

            <TouchableOpacity
            onPress={()=>{navigation.navigate('BirthdayAll')}}
            style={{alignSelf:"flex-end",borderBottomWidth:0.5}}>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>วันเกิดทั้งหมด {">>"}</Text>
            </TouchableOpacity>
        </View>
        
        
          <View style={{width:width*0.863,height:height*0.035,flexDirection:"row"}}>        
            <TextInput placeholder="ค้นหาจากชื่อ .." style={{width:width*0.800,height:height*0.035,borderWidth:1,borderColor:"#E5E5E5",paddingLeft:5,fontFamily:'Prompt-Regular',fontSize:12}}/>      
            <TouchableOpacity style={{width:width*0.063,height:height*0.035,backgroundColor:"#C13B78",justifyContent:"center",alignItems:"center"}}>
               <AntDesign name="search1"  size={15} color="#ffff" />
            </TouchableOpacity>     
          </View>

          <Text style={{fontSize:13,fontFamily:'Prompt-Regular',width:width*0.863,marginVertical:10}}>วันศุกร์ที่ 7 มกราคม 2564</Text>
          
          <View style={{height:height,backgroundColor:"#ffff",alignItems:'center'}}>                    
          
          <FlatList
            data={data1}        
            renderItem={({item}) => {
              return (
               
            <TouchableOpacity style={{width:width*0.863,height:height*0.100,alignItems:"center",alignItems:"center",marginVertical:5,flexDirection:"row"}}>
              <View style={styles.BoxProfile}></View>
              
              <View style={{width:200,height:height*0.072,paddingLeft:10}}>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>ชื่อ นามสกุล</Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>รุ่นที่ 1 </Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>วันเกิด</Text>
              </View>
              
            </TouchableOpacity>                          
              );
            }}
          />
          
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
