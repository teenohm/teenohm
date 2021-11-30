import { StatusBar } from "expo-status-bar";
import React, {useRef} from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,Image,TextInput,Picker
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { AntDesign, Entypo,FontAwesome5 } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const { width, height } = Dimensions.get("screen");

export default function App({ navigation, route }) {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [selectedValueGender, setSelectedValueGender] = useState("please select");
  const [selectedValueStatus, setSelectedValueStatus] = useState("please select");
  const [handlesterm, setHandlesTerm] = useState(false);



  return (
    <View style={styles.container}>
      <SafeAreaView/>

        <KeyboardAwareScrollView>
        <View style={{width:width,height:height,backgroundColor:'#FFFFFF',marginTop:100,borderTopLeftRadius:35,borderTopRightRadius:35,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            
            elevation: 5,}}>
            <Text style={{fontFamily:'Kanit-Regular',fontSize:20,color:'#74B4E3',marginLeft:20,marginTop:20}}>สมัครสมาชิก</Text>
             <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000',marginLeft:16}}>กรอกรายละเอียด เพื่อสร้างบัญชีของคุณ</Text>
        <View style={{width:width*0.9,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:20}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>ชื่อผู้ใช้</Text>
          <TextInput
            style={{
              width: width * 0.9,
              height: 30,
              justifyContent: "center",
              paddingLeft: 5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              borderBottomWidth:1,borderBottomColor:'#A1949A',alignSelf:'center'
            }}
            onChangeText={(username) => setusername(username)}
            defaultValue={username}
          />
          </View>

          <View style={{width:width*0.9,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:5}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>รหัสผ่าน</Text>
          <TextInput
            style={{
              width: width * 0.9,
              height: 30,
              justifyContent: "center",
              paddingLeft: 5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              borderBottomWidth:1,borderBottomColor:'#A1949A',alignSelf:'center'
            }}
            onChangeText={(password) => setpassword(password)}
            defaultValue={password}
          />
          </View>

        <View style={{width:width*0.9,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:20}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>ชื่อ-นามสกุล</Text>
          <TextInput
            style={{
              width: width * 0.9,
              height: 30,
              justifyContent: "center",
              paddingLeft: 5,
              fontFamily: "Kanit-Regular",
              fontSize: 18,
              borderBottomWidth:1,borderBottomColor:'#A1949A',alignSelf:'center'
            }}
            onChangeText={(name) => setname(name)}
            defaultValue={name}
          />
          </View>

          <View style={{width:width*0.9,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:5}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>อีเมล</Text>
          <TextInput
            style={{
              width: width * 0.9,
              height: 30,
              justifyContent: "center",
              paddingLeft: 5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              borderBottomWidth:1,borderBottomColor:'#A1949A',alignSelf:'center'
            }}
            onChangeText={(email) => setemail(email)}
            defaultValue={email}
          />
          </View>

          <View style={{width:width*0.9,alignSelf:'center',backgroundColor:'',marginTop:5}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>เบอร์โทรศัพท์</Text>
          <TextInput
            style={{
              width: width * 0.9,
              height: 30,
              justifyContent: "center",
              paddingLeft: 5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              borderBottomWidth:1,borderBottomColor:'#A1949A',alignSelf:'center'
            }}
            onChangeText={(phone) => setphone(phone)}
            defaultValue={phone}
          />
          </View>
          

            <View style={{flexDirection:'row',marginTop:10,width:width*0.9,alignSelf:'center',alignItems:'center',paddingHorizontal:10}}>
              <TouchableOpacity onPress={() => {
              setHandlesTerm((val) => !val);
            }}
          >
            {handlesterm ? (
              <FontAwesome5 name="check-square" size={20} color="#C4C4C4" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#C4C4C4" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ฉันยอมรับข้อกำหนดและเงื่อนไข</Text>
            </View>         
  
            <TouchableOpacity style={{width:width*0.8,height:50,backgroundColor:'#74B4E3',borderRadius:5,alignSelf:'center',justifyContent:'center',marginTop:20,marginBottom:10}}>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:20,color:'#FFFFFF',alignSelf:'center',justifyContent:'center'}}>สมัคร</Text>
            </TouchableOpacity>
            </View>
            </KeyboardAwareScrollView>
            <View style={{width:40,height:40,alignSelf:'flex-start',position:'absolute',top:0,left:0,marginTop:25,marginLeft:10}}>
        <TouchableOpacity onPress={()=> {navigation.goBack()}} 
          style={{alignSelf:'center',justifyContent:'center',width:40,height:40}}>
        <AntDesign name="arrowleft" size={30} color="white" />
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,alignSelf:'center',backgroundColor:'#C5E5FE'
  },
});
