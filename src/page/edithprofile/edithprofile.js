import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { SafeAreaView } from "react-native-safe-area-context";

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
  Switch,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get("screen");
const Main = ({ navigation }) => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState1 => !previousState1);
  const toggleSwitch2 = () => setIsEnabled2(previousState2 => !previousState2);
  
  return (
<KeyboardAwareScrollView>
<View style={styles.container}>
<SafeAreaView style={{backgroundColor:'blue'}}/>
  
    <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       justifyContent:"center"
       }}>   
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>ข้อมูลส่วนตัว</Text>           
     </View>
       
     <View style={{width:width,height:height*0.171,backgroundColor:"#E5E5E5"}}> 
      <TouchableOpacity style={{width:35,height:35,position:"absolute",right:0,marginRight:10,bottom:0,marginBottom:10}}>
         <Image resizeMode={"cover"} style={{width:35,height:35,alignSelf:"center"}} source={require("../../img/iconCamare.png")}/>  
       </TouchableOpacity>   
     </View>

     <View style={{width:width*0.388,height:height*0.184,borderRadius:5,alignSelf:"center",alignItems:"center",justifyContent:"center",marginTop:-80}}>
       <Image resizeMode={"contain"} style={{width:140,height:140,alignSelf:"center"}} source={require("../../img/Profile.png")}/> 
      
       <TouchableOpacity style={{width:35,height:35,position:"absolute",right:0,marginRight:10,bottom:0,marginBottom:10}}>
         <Image resizeMode={"cover"} style={{width:35,height:35,alignSelf:"center"}} source={require("../../img/iconCamare.png")}/>  
       </TouchableOpacity>  

     </View>
    

     <View style={{width:width*0.9,alignItems:"center",marginTop:10}}>    
      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>ชื่อ</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

  
      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>นามสกุล</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>ชื่อเล่น</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

      <View style={styles.BoxEdit}>   
           <Text style={styles.Text14}>รุ่น</Text>
        <View style={styles.viewTextshow}>
           <Text style={styles.textshow}>รุ่นที่ 10</Text>  
        </View>    
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>กลุ่ม</Text>
        <View style={styles.viewTextshow}>  
        <Text style={styles.textshow}>ดาวลูกไก่</Text> 
        </View>
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>บทบาท</Text>  
        <View style={styles.viewTextshow}>  
        <Text style={styles.textshow}>ประธานรุ่นฝ่ายฆราวาส</Text>   
        </View>     
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>ตำแหน่งงาน</Text>  
        <TextInput style={{width:width*0.58,height:height*0.039,borderColor:"#A5A5A5",borderWidth:1}}/> 
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>วันเกิด</Text>  
        <TextInput style={{width:width*0.58,height:height*0.039,borderColor:"#A5A5A5",borderWidth:1}}/> 
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>เบอร์โทรศัพท์</Text>  
        <TextInput style={{width:width*0.58,height:height*0.039,borderColor:"#A5A5A5",borderWidth:1}}/> 
      </View>
      
     
      
      <View style={{width:width*0.9,flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"flex-end",borderColor:"#00000030"}}>   
      <Text style={{fontFamily:"Prompt-Regular",fontSize:11,color:"#C13B78"}}>แสดง  </Text>  
      <Switch
        trackColor={{ false: "#E1E1E1", true: "#91E991" }}
        thumbColor={isEnabled1 ? "#656565" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
      />  
      </View>
      

      <View style={{width:width*0.9,flexDirection:"row",marginTop:15,justifyContent:"space-between",borderColor:"#00000030"}}>   
        <Text style={styles.Text14}>ที่อยู่</Text>  
        <TextInput multiline style={{width:width*0.58,height:height*0.109,borderColor:"#A5A5A5",borderWidth:1,padding:10}}/> 
      </View>

      <View style={{width:width*0.9,flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"flex-end",borderColor:"#00000030"}}>   
      <Text style={{fontFamily:"Prompt-Regular",fontSize:11,color:"#C13B78"}}>แสดง  </Text>  
      <Switch
        trackColor={{ false: "#E1E1E1", true: "#91E991" }}
        thumbColor={isEnabled2 ? "#656565" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
      />  
      </View>

      <View style={{width:width*0.8,height:height*0.2,flexDirection:"row",alignSelf:"center",justifyContent:"space-around",marginTop:20}}>   
       <TouchableOpacity
      //  onPress={()=>{navigation.navigate('Edithprofile')}}
          style={{width:120,height:40,backgroundColor:'#ffff',alignItems:'center',justifyContent:'center',borderRadius:5,borderWidth:1}}>
          <Text style={styles.Text13}>ยืนยันข้อมูล</Text>
       </TouchableOpacity>

       <TouchableOpacity
       onPress={()=>{navigation.navigate('Profile')}}
          style={{width:120,height:40,backgroundColor:'#FCB6D0',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Text style={styles.Text13}>ยกเลิก</Text>
       </TouchableOpacity>
      </View>

  </View>
 
  
</View>
</KeyboardAwareScrollView>
  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:"#ffff",alignItems:"center"
  },
  viewTextshow:{width:width*0.58,height:height*0.039,backgroundColor:"#CCCCCC30",paddingLeft:10,borderWidth:1,borderColor:"#00000030",justifyContent:"center"},
  textshow:{fontFamily:"Prompt-Regular",fontSize:14},
  textinput:{width:width*0.58,height:height*0.039,borderColor:"#A5A5A5",borderWidth:1,paddingLeft:10,fontFamily:"Prompt-Regular",},
  Text14:{fontFamily:"Prompt-Regular",fontSize:14,color:"#C13B78"},
  BoxEdit:{width:width*0.9,flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between",borderColor:"#00000030"}, 
});
