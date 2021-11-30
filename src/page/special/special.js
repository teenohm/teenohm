import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default App = ({ navigation, route }) => {
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const data = [{data},{data},{data},{data},{data},{data},{data}];
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
         <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>สิทธิพิเศษ</Text>
         </View>      

         <TouchableOpacity
         onPress={()=>{navigation.navigate('Notification')}}
          style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>       
     </View>

       <View style={{width:width,height:40,flexDirection:"row"}}>

          <TouchableOpacity
          onPress={() => {setpage(1)}}
          style={{width:width*0.5,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==1? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:14,fontFamily:'Prompt-Regular',color:page==1? "#C13B78":"#444444"}}>สิทธิประโยชน์</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => {setpage(2)}}
          style={{width:width*0.5,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==2? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:14,fontFamily:'Prompt-Regular',color:page==2? "#C13B78":"#444444"}}>สิทธิพิเศษ</Text>
          </TouchableOpacity>

       </View> 
            {page == 1 && 
            <View style={{height:height*0.695,backgroundColor:"#ffff"}}>
              
        {/* <ScrollView> */}
          <FlatList        
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  
                <TouchableOpacity
                onPress={()=>{navigation.navigate('BenefitsDetail')}}
                style={styles.BoxAll}>
                  <View style={{width:width*0.400,height:height*0.157}}>
                    <Image resizeMode={"stretch"} style={{width:width*0.400,height:height*0.157}} source={require("../../img/หน้าปก.png")}/>
                  </View>
                  <View style={{width:width*0.430,height:height*0.157,paddingLeft:5}}>
                  <Text style={styles.Text14}>ส่วนลด 10% จากร้านอาหารคุณน้อย</Text>
                  <Text style={styles.Text6}>   Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Text>
                  
                  <View style={{width:width*0.415,height:height*0.02,alignItems:"flex-end",backgroundColor:"#ffff"}}>
                    <Text style={styles.Text5}>ตั้งแต่วันที่ 1 กันยายน 2564 - 30 กันยายน 2564</Text>
                  </View>
                  
                  </View>
                  
                </TouchableOpacity>
                
                </View>
              );
            }}
          />         
          {/* </ScrollView> */}
          
             
              
            </View>
            }
            {page == 2 && 
            <View style={{height:height*0.695,backgroundColor:"#ffff"}}>
              
              {/* <ScrollView> */}
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  
                <TouchableOpacity
                onPress={()=>{navigation.navigate('PrivilegesDetail')}}
                style={styles.BoxAll}>
                  <View style={{width:width*0.400,height:height*0.157}}>
                    <Image resizeMode={"stretch"} style={{width:width*0.400,height:height*0.157}} source={require("../../img/หน้าปก.png")}/>
                  </View>
                  <View style={{width:width*0.430,height:height*0.157,paddingLeft:5}}>
                  <Text style={styles.Text14}>สิทธิพิเศษ</Text>
                  <Text style={styles.Text6}>   Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Text>
                  
                  <View style={{width:width*0.415,height:height*0.02,alignItems:"flex-end",backgroundColor:"#ffff"}}>
                    <Text style={styles.Text5}>ตั้งแต่วันที่ 1 กันยายน 2564 - 30 กันยายน 2564</Text>
                  </View>
                  
                  </View>
                  
                </TouchableOpacity>
                
                </View>
              );
            }}
          />         
          {/* </ScrollView> */}
        
           
            
          </View>
          }

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,width,height,backgroundColor: "#ffff",alignSelf:'center'
  },
  BoxAll:{width:width*0.9,height:height*0.184,alignSelf:"center",marginTop:10,borderRadius:10,borderWidth:1,borderColor:"#FCB6D0",alignItems:"center",justifyContent:"center",flexDirection:"row"},
  Text5:{fontSize:5,fontFamily:'Prompt-Regular'},
  Text6:{fontSize:6,fontFamily:'Prompt-Regular',height:height*0.085},
  Text12:{fontSize:12,fontFamily:'Prompt-Regular',color:"#C13B78"},
  Text14:{fontSize:14,fontFamily:'Prompt-Bold',width:width*0.415,height:height*0.052}
});
