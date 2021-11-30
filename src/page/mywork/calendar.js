import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import CalendarPicker from 'react-native-calendar-picker';
import RNPickerSelect, { defaultStyles } from "react-native-picker-select";

const { width, height } = Dimensions.get("window");


export default App = ({ navigation, route }) => {
  const placeholder1 = {
    label: "2564",
    value: null,
  };
  const [items1, setItems1] = useState([
    { label: "2565", value: "" },
    { label: "2566", value: "" },
  ]);
  
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
         <Text style={{fontSize:20,fontFamily:'Prompt-Regular'}}>ปฏิทินวิจัย</Text>
         </View>      

         <TouchableOpacity
         onPress={()=>{navigation.navigate('Notification')}}
          style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>       
      </View>

      <View style={{width:width,height:height*0.07,alignItems:"center",justifyContent:"center"}}>
          <View style={{width:width*0.888,height:height*0.035,flexDirection:"row"}}>
            
            <TextInput placeholder="ค้นหาจากชื่องานวิจัย .." style={{width:width*0.800,height:height*0.035,borderWidth:1,borderColor:"#E5E5E5",paddingLeft:5,fontFamily:'Prompt-Regular',fontSize:12}}/>      
            <TouchableOpacity style={{width:width*0.063,height:height*0.035,backgroundColor:"#C13B78",justifyContent:"center",alignItems:"center"}}>
               <AntDesign name="search1"  size={15} color="#ffff" />
            </TouchableOpacity>
          
          </View>
      </View>

      <View style={{width:width*0.888,height:height*0.052,alignItems:"center",flexDirection:"row"}}>
         <Text style={{fontSize:14,fontFamily:'Prompt-Regular'}}>ปีการศึกษา</Text>
         <View style={{width:width*0.202,height:height*0.039,marginLeft:10,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#00000040"}}>
           <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>2564</Text>
         </View>
      </View> 
      
      <View style={{width:width*0.888,height:height*0.3,marginTop:10}}>
        <Image resizeMode={"contain"} style={{width:width*0.888,height:height*0.3,alignSelf:"center"}} source={require("../../img/calendar.png")}/>  
      </View>
      
      <View style={{width:width*0.888,marginTop:10}}>
        <Text style={{fontSize:14,fontFamily:'Prompt-Bold'}}>รายการวิจัย</Text>
        <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>วันศุกร์ที่ 7 มกราคม พ.ศ. 2564</Text>
        <Text style={{fontSize:8,fontFamily:'Prompt-Regular',marginTop:10}}>ไม่มีรายการ ..</Text>
      </View>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,height:height,backgroundColor: "#ffff",alignItems:'center'
  },
});
