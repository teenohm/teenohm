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
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get("window");

const Main = ({ navigation }) => {

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
           onPress={()=>{navigation.navigate('Home')}}
           style={{width:width*0.1,alignItems:"flex-end"}}>
             <Ionicons name="caret-back-circle" size={25} color="black" />
          </TouchableOpacity>
          <View style={{width:width*0.8,alignItems:"center"}}> 
             <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>สิทธิประโยชน์</Text>
          </View>      
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Notification')}}
           style={{width:width*0.1}}>
             <FontAwesome  name="bell" size={20} color="black" />
          </TouchableOpacity>       
        </View>


        <ScrollView>        
        <View style={{width:width,height:height*0.22}}>
         <Image resizeMode={"stretch"} style={{width:width,height:height*0.22}} source={require("../../img/หน้าปก.png")}/>
        </View>

        <View style={{width:width*0.9,height:height*0.1,justifyContent:"center",alignSelf:"center"}}>
             <Text style={styles.Text18}>ส่วนลด 10% จากร้านอาหารคุณน้อย</Text>
        </View>

        <View style={{width:width*0.9,alignSelf:"center"}}> 

        
        <Text style={styles.Text12}>     
           {"  "}Lorem Ipsum is simply dummy text of the printing
           and typesetting industry. Lorem Ipsum has been the
           industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and
           scrambled it to make a type specimen book. It has
           survived not only five centuries, but also the leap into
           electronic typesetting, remaining essentially unchanged.
           It was popularised in the 1960s with the release of
           Letraset sheets containing Lorem Ipsum passages, and
           more recently with desktop publishing software like Aldus
           PageMaker including versions of Lorem Ipsum.
        </Text>  
        <Text style={styles.Text10}>ตั้งแต่วันที่ 1 กันยายน 2564 - 30 กันยายน 2564</Text>  

     </View>   
    </ScrollView>

</View>

  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:"#ffff",
  },
  Text10:{width:width*0.9,fontSize:10,fontFamily:"Prompt-Regular",color:"#444444",marginTop:20},
  Text12:{width:width*0.9,fontSize:12,fontFamily:"Prompt-Regular",color:"#444444"},
  Text18:{width:width*0.9,fontSize:18,fontFamily:"Prompt-Bold",color:"#444444"}
  
});
