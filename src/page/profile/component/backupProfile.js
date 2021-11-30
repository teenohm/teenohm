import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity,Modal} from "react-native";
import { AntDesign, Entypo,FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MainModal from "./component/modal"

const { width, height } = Dimensions.get("screen");

export default App = ({navigation,route}) => {
  const [instragram, setinstragram] = useState(false);
  const [facebook, setfacebook] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [youtube, setyoutube] = useState(false);
  const [other, setother] = useState(false);
  const [visible, setVisible] = useState(false);
  

  return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor:'#74B4E3'}}/>
        <Modal
        style={{ flex: 1, backgroundColor: "transparent" }}
        transparent={true}
        visible={visible}
      >
        <MainModal
          setVisible={setVisible}
        ></MainModal>
      </Modal>
      
     <Text style={{marginLeft:20,justifyContent:'center',color:'#FFFFFF',fontSize:20,fontFamily:'Kanit-Regular',marginTop:30}}>โปรไฟล์</Text>
    <View style={{width:width,alignSelf:'center',backgroundColor:'#C5E5FE',marginTop:40,height:height}}>
      <View style={{width:width*0.9,height:460,backgroundColor:'#FFFFFF',alignSelf:'center',marginTop:10,borderRadius:6,alignItems:'center'}}>

  <TouchableOpacity onPress={()=>{navigation.navigate('Edithprofile')}}
  style={{width:60,height:20,backgroundColor:'#E5E5E5',marginTop:10,alignSelf:'flex-end',alignItems:'center',
  justifyContent:'center',borderRadius:5,marginRight:20}}>
  <Text style={{fontFamily:'Kanit-Regular',fontSize:12,color:'#00000025'}}>แก้ไข</Text>
  </TouchableOpacity>

          <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,borderBottomWidth:1.5,borderBottomColor:'#00000010'}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>ชื่อบัญชี</Text>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#00000045'}}>Musiclnwza555</Text>
          </View>

          <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,borderBottomWidth:1.5,borderBottomColor:'#00000010'}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>อีเมล</Text>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#00000045'}}>Musiclnwza555@gmail.com</Text>
          </View>

          <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,borderBottomWidth:1.5,borderBottomColor:'#00000010'}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>เบอร์โทรศัพท์</Text>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#00000045'}}>087-079653xx</Text>
          </View>

          <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,borderBottomWidth:1.5,borderBottomColor:'#00000010'}}>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#000000'}}>คุณทำธุรกิจอะไร</Text>
          <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#00000045'}}>ขายกระเป๋า</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:10,width:width*0.8,alignSelf:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              setinstragram((val) => !val);
            }}
          >
            {instragram ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>Instragram</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:10,width:width*0.8,alignSelf:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              setfacebook((val) => !val);
            }}
          >
            {facebook ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>Facebook</Text>
          </View>
          
          <View style={{flexDirection:'row',marginTop:10,width:width*0.8,alignSelf:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              settwitter((val) => !val);
            }}
          >
            {twitter ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>Twitter</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:10,width:width*0.8,alignSelf:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              setyoutube((val) => !val);
            }}
          >
            {youtube ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>Youtube</Text>
          </View>

          <View style={{flexDirection:'row',marginTop:10,width:width*0.8,alignSelf:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={() => {
              setother((val) => !val);
            }}
          >
            {other ? (
              <FontAwesome5 name="check-square" size={20} color="#74B4E3" />
            ) : (
              <FontAwesome5 name="square" size={20} color="#74B4E3" />
            )}
              </TouchableOpacity>
              <Text style={{fontFamily:'Kanit-Regular',fontSize:14,color:'#000000',marginLeft:5}}>อื่นๆ ...</Text>
          </View>

        <TouchableOpacity onPress={() => setVisible((val) => !val)}
        style={{width:170,height:30,backgroundColor:'#74B4E3',alignSelf:'center',flexDirection:'row',
        alignItems:'center',justifyContent:'center',borderRadius:5}}>
        <Image source={require("../../image/king.png")} style={{alignSelf:'center',width:15,height:15,resizeMode:'contain',marginRight:10}}/>
        <Text style={{fontFamily:'Kanit-Regular',fontSize:16,color:'#FFFFFF'}}>สมัคร Premium</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:'#74B4E3'}}>
          <Text style={{color:"#74B4E3",fontFamily:'Kanit-Regular',fontSize:14}}>ออกจากระบบ</Text>
        </TouchableOpacity>
      </View>
     </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74B4E3",alignSelf:'center'
  },
});
