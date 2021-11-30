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

  return ( 
<KeyboardAwareScrollView>
<View style={styles.container}>
<SafeAreaView style={{backgroundColor:'black'}}/>
  
    <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       justifyContent:"center"
       }}>   
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>ข้อมูลส่วนตัว</Text>           
     </View>
       
     <View style={{width:width,height:130,backgroundColor:"#E5E5E5"}}> 

     </View>
     <View style={{width:width*0.388,height:height*0.184,borderRadius:5,alignSelf:"center",justifyContent:"center",marginTop:-80}}>
       <Image resizeMode={"stretch"} style={{width:140,height:140,alignSelf:"center"}} source={require("../../img/Profile.png")}/>  
     </View>


     <View style={{width:width*0.9,alignItems:"center",marginTop:10}}>
      
      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>รหัสผ่านเดิม</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

      <View style={{width:width*0.9,marginTop:5}}>    
            <TouchableOpacity onPress={()=>{navigation.navigate('Forget')}}>          
              <Text style={{fontFamily:'Prompt-Regular',fontSize:10,color:'#EE1D23',alignSelf:"flex-end",borderBottomWidth:1,borderColor:"#EE1D23"}}>ลืมรหัสผ่าน</Text>
            </TouchableOpacity> 
      </View>
           
  
      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>รหัสผ่านใหม่</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

      <View style={styles.BoxEdit}>   
        <Text style={styles.Text14}>ยืนยันรหัสผ่านใหม่</Text>  
        <TextInput style={styles.textinput}/> 
      </View>

     
      <View style={{width:width*0.8,height:height*0.2,flexDirection:"row",alignSelf:"center",justifyContent:"space-around",marginTop:30}}>   
       <TouchableOpacity
      //  onPress={()=>{navigation.navigate('Edithprofile')}}
          style={{width:120,height:40,backgroundColor:'#ffff',alignItems:'center',justifyContent:'center',borderRadius:5,borderWidth:1}}>
          <Text style={styles.Text13}>ยืนยันการแก้ไข</Text>
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
    flex: 1,height,backgroundColor:"#ffff",alignItems:"center"
  },
  textinput:{width:width*0.58,height:height*0.039,borderColor:"#A5A5A5",borderWidth:1,paddingLeft:10,fontFamily:"Prompt-Regular",},
  Text14:{fontFamily:"Prompt-Regular",fontSize:14,color:"#C13B78"},
  BoxEdit:{width:width*0.9,flexDirection:"row",marginTop:15,alignItems:"center",justifyContent:"space-between",borderColor:"#00000030"}, 
});
