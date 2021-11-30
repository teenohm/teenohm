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

const { width, height } = Dimensions.get("screen");


export default function App({ navigation, route }) {
  const [mail, setmail] = useState("");

  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor:'#ffff'}} />
      <KeyboardAwareScrollView>
            
          <View style={{
            width:width,
            height:height*0.9,
            
            alignItems:"center",
            justifyContent:"center"
            }}>
          
          <Text style={styles.Text1}>ใส่ E-mail ของท่าน</Text>
          <TextInput style={styles.Text2}
            // onChangeText={(mail) => setmail(mail)}
            // defaultValue={mail}
            />

          <TouchableOpacity onPress={()=>{navigation.navigate('Newpassword')}}
            style={{width:width*0.416,height:height*0.052,backgroundColor:'#71AAFF',borderRadius:5,alignSelf:'center',justifyContent:'center',marginTop:30,marginRight:10}}>
              <Text style={{fontFamily:'Prompt-Regular',fontSize:16,color:'#FFFFFF',alignSelf:'center',justifyContent:'center'}}>ยืนยัน</Text>
            </TouchableOpacity>
              
          </View>
          <Image resizeMode={"cover"} style={{width:111,height:38,alignSelf:"center"}} source={require("../../img/LogoMore.png")}/>
       </KeyboardAwareScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor:"#F4F7FE"
  },
  
  Text1:{width:width*0.694,height:height*0.040,fontFamily:"Prompt-Regular",fontSize:16,color:"#4B4B4B"},
  Text2:{width: width * 0.694,height:height*0.052,fontFamily:"Prompt-Regular",fontSize:16,color:"#4B4B4B90",borderWidth:1,borderRadius:5,borderColor:"#4E4E4E40",backgroundColor:"#ffff",paddingLeft:5},
  
});
