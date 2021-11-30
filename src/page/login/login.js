import { StatusBar } from "expo-status-bar";
import React, {useRef, useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,Image,ImageBackground,TextInput
} from "react-native";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { width, height } = Dimensions.get("window");

export default function App({ navigation, route }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor:'#ffff'}} />
      <KeyboardAwareScrollView>
          
          <View style={{
            width:width,
            height:height,
            backgroundColor:"#F4F7FE",
            alignItems:"center",
            justifyContent:"center"
            }}>
          
          <Text style={styles.Text1}>ชื่อผู้ใช้</Text>
          <TextInput style={styles.Text2}
            // onChangeText={(username) => setusername(username)}
            // defaultValue={username}
            />

          <Text style={[styles.Text1,{marginTop:10}]}>รหัสผ่าน</Text>
          <TextInput style={styles.Text2}
            // onChangeText={(password) => setpassword(password)}
            // defaultValue={password}
            />

          <TouchableOpacity onPress={()=>{navigation.navigate('Logo')}}
            style={{width:width*0.416,height:height*0.052,backgroundColor:'#71AAFF',borderRadius:5,alignSelf:'center',justifyContent:'center',marginTop:30,marginRight:10}}>
              <Text style={{fontFamily:'Prompt-Regular',fontSize:16,color:'#FFFFFF',alignSelf:'center',justifyContent:'center'}}>เข้าสู่ระบบ</Text>
            </TouchableOpacity>


              
            <TouchableOpacity onPress={()=>{navigation.navigate('Forget')}} 
             style={{marginTop:10}}>
               <Text style={{fontFamily:'Prompt-Regular',fontSize:14,color:'#EE1D23',alignSelf:"flex-end",borderBottomWidth:1,borderColor:"#EE1D23"}}>ลืมรหัสผ่าน</Text>
            </TouchableOpacity>
            
            
          </View>
       </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  
  Text1:{width:width*0.694,height:height*0.040,fontFamily:"Prompt-Regular",fontSize:16,color:"#4B4B4B"},
  Text2:{width: width * 0.694,height:height*0.052,fontFamily:"Prompt-Regular",fontSize:16,color:"#4B4B4B90",borderWidth:1,borderRadius:5,borderColor:"#4E4E4E40",backgroundColor:"#ffff",paddingLeft:5},
  
});
