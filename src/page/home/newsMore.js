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
    const data = [{data},{data},{data},{data},{data},{data}];
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
             <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>ข่าวสาร</Text>
          </View>      
          <TouchableOpacity 
          onPress={()=>{navigation.navigate('Notification')}}
          style={{width:width*0.1}}>
             <FontAwesome  name="bell" size={20} color="black" />
          </TouchableOpacity>       
        </View>


                
        <View style={{height:height*0.9,backgroundColor:"#ffff"}}>                    
        <ScrollView>

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  
                <TouchableOpacity
                onPress={()=>{navigation.navigate('NewsDetail')}}
                 style={styles.BoxAll}>
                 
                  <View style={{width:width*0.400,height:height*0.157}}>
                    <Image resizeMode={"stretch"} style={{width:width*0.400,height:height*0.157}} source={require("../../img/หน้าปก.png")}/>
                  </View>

                  <View style={{width:width*0.430,height:height*0.157,paddingLeft:5}}>
                  <Text style={styles.Text14}>ประชุมสัมมนาประชุมสัมมนาเชิงปฏิบัติการเรื่องการทำแผนประชุมสัมมนาเชิงปฏิบัติการเรื่องการทำแผนเชิงปฏิบัติการเรื่องการทำแผน ...</Text>
                  <Text style={styles.Text6}>   Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Text>
                  
                  <View style={{width:width*0.415,height:height*0.02,alignItems:"flex-end",backgroundColor:"#ffff"}}>
                    <Text style={styles.Text5}>ผู้โพส แอดมิน</Text>
                    <Text style={styles.Text5}>วันที่โพส 30 / 03 / 2564</Text>
                  </View>
                  
                  </View>                 
                </TouchableOpacity>
              
                </View>
              );
            }}
          />        
          </ScrollView>

        </View>

   

</View>

  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:"#ffff",
  },
  BoxAll:{width:width*0.9,height:height*0.184,alignSelf:"center",marginTop:10,borderRadius:10,borderWidth:1,borderColor:"#FCB6D0",alignItems:"center",justifyContent:"center",flexDirection:"row"},
  Text5:{fontSize:5,fontFamily:'Prompt-Regular'},
  Text6:{fontSize:6,fontFamily:'Prompt-Regular',height:height*0.085},
  Text12:{fontSize:12,fontFamily:'Prompt-Regular',color:"#C13B78"},
  Text14:{fontSize:14,fontFamily:'Prompt-Bold',width:width*0.415,height:height*0.052}
  
});
