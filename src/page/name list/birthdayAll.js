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
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DateTimePicker from '@react-native-community/datetimepicker';

const { width, height } = Dimensions.get("screen");

const Main = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("year");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };
const data1 = [{data1},{data1},{data1}];   


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
          <TouchableOpacity
           onPress={()=>{navigation.navigate('Birthday')}}
           style={{width:width*0.1,alignItems:"flex-end"}}>
             <Ionicons name="caret-back-circle" size={25} color="black" />
          </TouchableOpacity>
          <View style={{width:width*0.8,alignItems:"center"}}> 
             <Text style={{fontSize:19,fontFamily:'Prompt-Regular'}}>รายชื่อ</Text>
          </View>       
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Notification')}}
           style={{width:width*0.1}}>
             <FontAwesome  name="bell" size={20} color="black" />
          </TouchableOpacity>       
        </View>

        
           <Text style={{width:width*0.863,fontSize:20,fontFamily:'Prompt-Bold',marginVertical:10}}>วันเกิดทั้งหมด</Text>        
     
            
            <View style={{width:width*0.863,height:height*0.035,flexDirection:"row",justifyContent:"space-between"}}>
                {/* <View  style={{width:width*0.294,height:height*0.035,borderWidth:1,borderColor:"#E5E5E5",paddingLeft:5,justifyContent:"center"}}>
                    <Text style={{fontFamily:'Prompt-Regular',fontSize:12}}>มกราคม</Text>
                </View> */}

<View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>

      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={new Date()}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>


                <View style={{flexDirection:"row"}}>        
                  <TextInput placeholder="ค้นหาจากชื่อ .." style={{width:width*0.463,height:height*0.035,borderWidth:1,borderColor:"#E5E5E5",paddingLeft:5,fontFamily:'Prompt-Regular',fontSize:12}}/>      
                   <TouchableOpacity style={{width:width*0.063,height:height*0.035,backgroundColor:"#C13B78",justifyContent:"center",alignItems:"center"}}>
                        <AntDesign name="search1"  size={15} color="#ffff" />
                   </TouchableOpacity>     
                </View>

            </View>
            

          
          
          <View style={{height:height,backgroundColor:"#ffff",alignItems:'center'}}>                    
          
          <FlatList
            data={data1}        
            renderItem={({item}) => {
              return (
               
            <TouchableOpacity style={{width:width*0.863,height:height*0.100,alignItems:"center",alignItems:"center",marginVertical:5,flexDirection:"row"}}>
              <View style={styles.BoxProfile}></View>
              
              <View style={{width:200,height:height*0.072,paddingLeft:10}}>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>ชื่อ นามสกุล</Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>รุ่นที่ 1 </Text>
              <Text style={{fontSize:12,fontFamily:'Prompt-Regular'}}>วันเกิด</Text>
              </View>
              
            </TouchableOpacity>                          
              );
            }}
          />
          
        </View>
    
 
  
    </View>

  );
};
export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,height,backgroundColor:"#ffff",alignItems:"center"
  },
  BoxProfile:{width:width*0.152,height:height*0.072,borderWidth:1,borderRadius:5,backgroundColor:"#ffff",borderColor:"#707070"},
});
