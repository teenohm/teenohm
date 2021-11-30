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
              width: width * 0.8,
              backgroundColor: "#C5E5FE",
              alignSelf: "center",
              borderRadius: 10,height:height*0.8
            }}
          >
              <View>
              <TouchableOpacity onPress ={() => { setVisible(val => !val ) }}
              style={{width:40,height:40,alignSelf:'flex-end',marginRight:10}}>
                <Image
                  source={require("../../../image/cancle.png")}
                  style={{
                    width: 30,
                    height: 30,resizeMode:'contain',
                    alignSelf: "flex-end",
                    justifyContent: "center",marginRight:10,marginTop:10
                  }}
                />
                </TouchableOpacity>
                </View>

            <Text
              style={{
                fontSize: 20,
                color: "#74B4E3",
                fontFamily: "Kanit-Regular",
                alignSelf: "center",justifyContent:'center',marginTop:10
                
              }}
            >
              Upgrade เป็น PungPung Premium
            </Text>
            <View style={{width:width*0.7,backgroundColor:'#ffffff',height:height*0.6,alignSelf:'center',marginTop:10}}>
            <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:10,width:width*0.7,alignSelf:'center',alignItems:'center',paddingHorizontal:20}}>
          <TouchableOpacity
          onPress={() => {
              setdata((val) => !val);
            }}
          >
            {data ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>ปลดล็อกคลังสติ๊กเกอร์ทั้งหมด</Text>
          </View>
          <TouchableOpacity style={{width:170,height:30,backgroundColor:'#C4C4C445',alignItems:'center',alignSelf:'center',justifyContent:'center',marginTop:10}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#74B4E3'}}>ทดลองใช้ฟรีสามวัน</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',width:width*0.6,alignSelf:'center',paddingHorizontal:10}}>
          <View style={{width:width*0.25,backgroundColor:'#C5E5FE',alignItems:'center',alignSelf:'center',justifyContent:'center',marginTop:10,marginRight:10}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#74B4E3'}}>฿299.00 / เดือน</Text>
          </View>
          <View style={{width:width*0.25,backgroundColor:'#C4C4C465',alignItems:'center',alignSelf:'center',justifyContent:'center',marginTop:10}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#74B4E3'}}>฿990.00 / ปี</Text>
          </View>
          </View>
          <TouchableOpacity onPress={() => setVisible((val) => !val)}
        style={{width:170,height:30,backgroundColor:'#74B4E3',alignSelf:'center',flexDirection:'row',
        alignItems:'center',justifyContent:'center',borderRadius:5,marginTop:10}}>
        <Image source={require("../../../image/king.png")} style={{alignSelf:'center',width:15,height:15,resizeMode:'contain',marginRight:10}}/>
        <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#FFFFFF'}}>สมัคร Premium</Text>
        </TouchableOpacity>
            </View>
            </View>
         

        
    </SafeAreaView>
  );
}
