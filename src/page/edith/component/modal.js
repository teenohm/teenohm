import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  FlatList,
  SafeAreaView,Modal
} from "react-native";
import { FontAwesome5, AntDesign, Fontisto } from "@expo/vector-icons";


const { width, height } = Dimensions.get('window');

export default function index({ navigation, route,setVisible, }) {
  const [modalomise, setModalomise] = useState(false);
  const [modalimg, setModalimg] = useState(false);
  const [modal, setModal] = useState(true);
  const [page, setPage] = useState(1);
  const [data, setdata] = useState(false);
  return (
    <SafeAreaView style={{width:width,height:height,backgroundColor:"#000000bb",alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
      
      <View
            style={{
              width: width*0.95 ,
              backgroundColor: "#FFFFFF",
              alignSelf: "center",
              borderRadius: 10,justifyContent:'center'
            }}
          >
              <View>
              <TouchableOpacity onPress ={() => { setVisible(val => !val ) }}
              style={{width:40,height:40,alignSelf:'flex-end',marginRight:10}}>
                <Image
                  source={require("../../../image/cancle.png")}
                  style={{
                    width: 20,
                    height: 20,resizeMode:'contain',
                    alignSelf: "flex-end",
                    justifyContent: "center",marginRight:10,marginTop:10,alignItems:'center',backgroundColor:'#74B4E3'
                  }}
                />
                </TouchableOpacity>
                </View>

            <Text
              style={{
                fontSize: 20,
                color: "#74B4E3",
                fontFamily: "Kanit-Regular",
                alignSelf: "center",justifyContent:'center',marginTop:10,alignItems:'center'
                
              }}
            >
          อัปเกรดเป็น PungPung Pro เพื่อใช้สติ๊กเกอร์นี้
            </Text>

          <TouchableOpacity 
          // onPress={() => setVisible((val) => !val)}
        style={{width:170,height:30,backgroundColor:'#74B4E3',alignSelf:'center',flexDirection:'row',
        alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:10}}>
        <Image source={require("../../../image/king.png")} style={{alignSelf:'center',width:15,height:15,resizeMode:'contain',marginRight:10}}/>
        <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#FFFFFF'}}>สมัคร Premium</Text>
        </TouchableOpacity>

        <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#74B4E3',alignSelf:'center',justifyContent:'center',paddingVertical:10}}>หรือ</Text>

        <TouchableOpacity style={{width:170,height:30,backgroundColor:'#FFFFFF',alignItems:'center',alignSelf:'center',justifyContent:'center',
                                  shadowColor: "#000",
                                  shadowOffset: {
                                    width: 0,
                                    height: 2,
                                  },
                                  shadowOpacity: 0.25,
                                  shadowRadius: 3.84,
                                  
                                  elevation: 5,marginBottom:30}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#74B4E3'}}>ทดลองใช้ฟรีสามวัน</Text>
          </TouchableOpacity>
            
            </View>
         

        
    </SafeAreaView>
  );
}
