import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default App = ({ navigation, route }) => {

  return (
  <View style={styles.container}>
   <SafeAreaView style={{backgroundColor:'black'}}/>
    <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       flexDirection:"row",
       }}>
         <View style={{width:width*0.1}}></View>
         <View style={{width:width*0.8,alignItems:"center"}}> 
         <Text style={{fontSize:20,fontFamily:'Prompt-Regular'}}>รายชื่อ</Text>
         </View>      

         <TouchableOpacity style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>       
     </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,height:height,backgroundColor: "#ffff",alignSelf:'center'
  },
});
