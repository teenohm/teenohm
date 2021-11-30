import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity,Modal} from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import MainModal from "./component/modal"
import { ScrollView } from "react-native-gesture-handler";




const { width, height } = Dimensions.get("window");

export default App = ({navigation,route}) => {
  const [instragram, setinstragram] = useState(false);
  const [facebook, setfacebook] = useState(false);
  const [twitter, settwitter] = useState(false);
  const [youtube, setyoutube] = useState(false);
  const [other, setother] = useState(false);
  const [visible, setVisible] = useState(false);
  

  return (
      <View style={styles.container}>
        <SafeAreaView/>
        <View style={{width:width,height:height*0.9}}>
        
        {/* <Modal
        style={{ flex: 1, backgroundColor: "transparent" }}
        transparent={true}
        visible={visible}
      >
        <MainModal
          setVisible={setVisible}
        ></MainModal>
      </Modal> */}
     <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       flexDirection:"row",
       }}>
         <View style={{width:width*0.1}}></View>
         <View style={{width:width*0.8,alignItems:"center"}}>
          <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>ข้อมูลส่วนตัว</Text>
         </View>      
         <TouchableOpacity
         onPress={()=>{navigation.navigate('Notification')}}
          style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>
         
     </View>
      <View style={{width:width,height:130,backgroundColor:"#E5E5E5"}}> 

      </View>
      <View style={{width:width*0.388,height:height*0.184,borderRadius:5,alignSelf:"center",justifyContent:"center",marginTop:-80}}>
        <Image resizeMode={"stretch"} style={{width:140,height:140,alignSelf:"center"}} source={require("../../img/Profile.png")}/>  
      </View>

      <View style={{alignItems:"center",marginTop:10}}>
       <Text style={styles.Text16}>นาย เจมส์ คอนเนอร์</Text>
       <Text style={styles.Text16}>เจมส์</Text>

      <View style={{width:width*0.8,flexDirection:"row",marginTop:15}}>
        <FontAwesome5 style={{marginRight:20}} name="user-alt" size={20} color="#C13B78"  />
        <Text style={styles.Text13}>รุ่นที่ 10 กลุ่ม ดาวลูกไก่   ( ประธานรุ่นฝ่ายฆราวาส ) {"\n"}ที่ปรึกษาประธานบริษัทเกม</Text>    
      </View>
      
      <View style={styles.BoxDetail}>
        <MaterialIcons style={{marginRight:20}} name="cake" size={20} color="#C13B78" />
        <Text style={styles.Text13}>01 มกราคม 2500</Text>
      </View>
     
      <View style={styles.BoxDetail}>
      <Ionicons style={{marginRight:20}} name="call" size={20} color="#C13B78" />
      <Text style={styles.Text13}>081 - 1111111</Text>
      </View>
      
      <View style={styles.BoxDetail}>
      <Entypo style={{marginRight:20}} name="mail" size={20} color="#C13B78" />
      <Text style={styles.Text13}>jamescorner1@gmail.com</Text>
      </View>
    
      <View style={styles.BoxDetail}>
      <Ionicons style={{marginRight:20}} name="ios-location-sharp" size={20} color="#C13B78" />
      <Text style={styles.Text13}>99/99 ซ.พหลโยทิน40 แขวงเสนานิคม เขตจตุจักร กรุงเทพฯ 10900</Text>
      </View>
       
      </View>
      <View style={{width:width*0.8,flexDirection:"row",alignSelf:"center",justifyContent:"space-evenly",marginTop:20}}>   
       <TouchableOpacity
       onPress={()=>{navigation.navigate('Edithprofile')}}
          style={{width:120,height:40,backgroundColor:'#ffff',alignItems:'center',justifyContent:'center',borderRadius:5,borderWidth:1}}>
          <Text style={styles.Text13}>แก้ไขข้อมูล</Text>
       </TouchableOpacity>

       <TouchableOpacity
       onPress={()=>{navigation.navigate('Editpassword')}}
          style={{width:120,height:40,backgroundColor:'#FCB6D0',alignItems:'center',justifyContent:'center',borderRadius:5}}>
          <Text style={styles.Text13}>แก้ไขรหัสผ่าน</Text>
       </TouchableOpacity>
      </View>

      <View style={{width:width*0.8,flexDirection:"row",alignSelf:"center",justifyContent:"space-evenly",marginTop:20}}>   
       <TouchableOpacity
       onPress={()=>{navigation.navigate('Login')}}
          style={{width:120,height:40,backgroundColor:'#707070',alignItems:'center',justifyContent:'center',borderRadius:5,borderWidth:1}}>
          <Text style={{fontFamily:"Prompt-Regular",fontSize:13,color:"#ffff"}}>ออกจากระบบ</Text>
       </TouchableOpacity>
      
      </View>

      
     </View>







      {/* <View style={{width:width,alignSelf:'center',backgroundColor:'#C5E5FE',marginTop:40,height:height}}>
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
     </View> */}
    
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor:"#ffff"
  },
  Text13:{fontFamily:"Prompt-Regular",fontSize:13,color:"#444444"},
  Text16:{fontFamily:"Prompt-Regular",fontSize:16,color:"#444444"},
  BoxDetail:{width:width*0.8,flexDirection:"row",marginTop:10},
});
