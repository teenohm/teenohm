import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, height } = Dimensions.get("window");

export default App = ({ navigation, route }) => {

  const data = [{data:1},{data:2},{data:3}];
  const data1 = [{data1:"ประธานรุ่นฝ่ายสงฆ์"},{data1:"ประธานรุ่นฝ่ายฆราวาส"},{data1:"สมาชิก"},{data1:"สมาชิก"},{data1:"สมาชิก"},];
  const data2 = [{data2:"กรรมการโครงการ"},{data2:"ซูเปอร์แม่ไก่"},{data2:"แม่ไก่"},{data2:"ลูกไก่"}];
  const [page, setpage] = useState(1);

  return (
  <View style={styles.container}>
   <SafeAreaView/>
    <View style={{
       width:width,
       height:height*0.072,
       backgroundColor:"#FCB6D0",
       alignItems:"center",
       flexDirection:"row",
       }}>
         <View style={{width:width*0.1}}></View>
         <View style={{width:width*0.8,alignItems:"center"}}> 
         <Text style={{fontSize:20,fontFamily:'Prompt-Regular'}}>รายชื่อ</Text>
         </View>      

         <TouchableOpacity 
         onPress={()=>{navigation.navigate('Notification')}}
         style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>       
     </View>
        <View style={{width:width,height:height*0.263,backgroundColor:"#E9F0FF",alignItems:"center",justifyContent:"center"}}>
          <Text style={{fontSize:18,fontFamily:'Prompt-Regular',color:"#C62B62",marginVertical:15}}>สุขสันต์วันเกิด</Text>
          
         
       
          {/* <View style={{width:width*0.200,height:height*0.131,alignItems:"center",alignItems:"center"}}>
              <View style={styles.BoxProfile}></View>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>สมชาย การเจริญ</Text>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>รุ่นที่ 1</Text>
          </View> */}
         
           
          <FlatList
            data={data}
            horizontal         
            renderItem={({item}) => {
              return (
               
            <View style={{width:width*0.200,height:height*0.131,alignItems:"center",alignItems:"center",marginHorizontal:10}}>
              <View style={[styles.BoxProfile,{marginBottom:10}]}></View>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>สมชาย การเจริญ</Text>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>รุ่นที่ {item.data}</Text>
            </View>                          
              );
            }}
          />
            
          

          <View style={{width:width*0.9,height:height*0.06,justifyContent:"center",alignItems:"flex-end"}}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate('Birthday')}}>
              <Text style={{fontSize:10,fontFamily:'Prompt-Regular'}}>ดูผู้ที่เกิดวันนี้ทั้งหมด {">>"}</Text>
            </TouchableOpacity>
          </View>
       </View>

       <View style={{width:width,height:height*0.07,alignItems:"center",justifyContent:"center"}}>
          <View style={{width:width*0.863,height:height*0.035,flexDirection:"row"}}>
            
            <TextInput placeholder="ค้นหาจากรายชื่อ .." style={{width:width*0.800,height:height*0.035,borderWidth:1,borderColor:"#E5E5E5",paddingLeft:5,fontFamily:'Prompt-Regular',fontSize:12}}/>      
            <TouchableOpacity style={{width:width*0.063,height:height*0.035,backgroundColor:"#C13B78",justifyContent:"center",alignItems:"center"}}>
               <AntDesign name="search1"  size={15} color="#ffff" />
            </TouchableOpacity>
          
          </View>
       </View>

       <View style={{width:width,height:height*0.05,flexDirection:"row"}}>
          <TouchableOpacity
          onPress={() => {setpage(1)}}
          style={{width:width*0.5,height:height*0.05,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==1? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:18,fontFamily:'Prompt-Bold',color:page==1? "#C13B78":"#CFCFCF"}}>กลุ่ม</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity 
          onPress={() => {setpage(2)}}
          style={{width:width*0.5,height:height*0.05,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==2? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:18,fontFamily:'Prompt-Bold',color:page==2? "#C13B78":"#CFCFCF"}}>รายชื่อ</Text>
          </TouchableOpacity> */}
       </View> 

      {page == 1 && 
        <View style={{height:height*0.48,backgroundColor:"#ffff",alignItems:'center'}}>                    
          
        <FlatList
          data={data2}        
          renderItem={({item}) => {
            return (
             
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Group',{item})}}

           style={{width:width*0.85,height:height*0.100,alignItems:"center",alignItems:"center",marginVertical:5,flexDirection:"row"}}>
            <View style={styles.BoxProfile}></View>
            
            <View style={{width:200,height:height*0.072,paddingLeft:10,justifyContent:"center"}}>
              <Text style={{fontSize:16,fontFamily:'Prompt-Regular'}}>{item.data2}</Text>
            </View>
            
          </TouchableOpacity>                          
            );
          }}
        />
        
      </View>}

      {page == 2 && 
        <View style={{height:height*0.48,backgroundColor:"#ffff",alignItems:'center'}}>                    
          
        <FlatList
          data={data1}        
          renderItem={({item}) => {
            return (
             
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Userdetail')}}
           style={{width:width*0.85,height:height*0.100,alignItems:"center",alignItems:"center",marginVertical:5,flexDirection:"row"}}>
            <View style={styles.BoxProfile}></View>
            
            <View style={{width:200,height:height*0.072,paddingLeft:10}}>
            <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>ชื่อ นามสกุล</Text>
            <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>{item.data1}</Text>
            <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>รุ่นที่ 1 </Text>
            </View>
            
          </TouchableOpacity>                          
            );
          }}
        />
        
      </View>}



      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,height:height,backgroundColor: "#ffff",alignItems:"center"
  },
  BoxProfile:{width:width*0.152,height:height*0.072,borderWidth:1,borderRadius:5,backgroundColor:"#ffff",borderColor:"#707070"},
});
