import React, { useState, useRef } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo,FontAwesome5,Ionicons,MaterialIcons,FontAwesome } from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default App = ({ navigation, route }) => {
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const data = [{data},{data},{data},{data},{data}];
  const carouselRef = useRef();
  const [dataimg, setdataimg] = useState([{img:require("../../img/banner.png")},{img:require("../../img/banner.png")}])

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
         <Text style={{fontSize:20,fontFamily:'Prompt-Regular'}}>หน้าแรก</Text>
         </View>      
         <TouchableOpacity
         onPress={()=>{navigation.navigate('Notification')}}
         style={{width:width*0.1}}>
          <FontAwesome style={{}} name="bell" size={20} color="black" />
         </TouchableOpacity>       
     </View> 

       <View style={{width:width,height:height*0.267}}>
       {/* <Image resizeMode={"stretch"} style={{width:width,height:height*0.267,alignSelf:"center"}} source={require("../../img/banner.png")}/>   */}
       <Carousel
          ref={carouselRef}
          data={dataimg}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Math.round(width * 1)}
          autoplay
          loop
          inactiveSlideScale={1}
          renderItem={({ item, index }) => {
            //  console.log("129", item);
            return (
              <View>
                <Image
                  style={{ width: width, height:height*0.267}}
                   source={item.img}
                  // style={{ backgroundColor: "red" }}
                  // style={{ marginLeft: -width * 0.22, marginTop: -width * 0.2 }}
                />
              </View>
            );
          }}
        />
       </View>


       <View style={{width:width,height:height*0.05,flexDirection:"row"}}>

          <TouchableOpacity
          onPress={() => {setpage(1)}}
          style={{width:width*0.5,height:height*0.05,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==1? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:14,fontFamily:'Prompt-Regular',color:page==1? "#C13B78":"#444444"}}>ข่าวสารการวิจัย</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          onPress={() => {setpage(2)}}
          style={{width:width*0.5,height:height*0.05,borderBottomWidth:1,justifyContent:"center",alignItems:"center",borderColor:page==2? "#C13B78":"#ffff"}}>
            <Text style={{fontSize:14,fontFamily:'Prompt-Regular',color:page==2? "#C13B78":"#444444"}}>ความรู้เรื่องการวิจัย</Text>
          </TouchableOpacity>

       </View> 


      {page == 1 && 
        <View style={{height:height*0.5,backgroundColor:"#ffff"}}>                    
        {/* <ScrollView> */}

          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  
                <TouchableOpacity
                onPress={()=>{navigation.navigate('NewsDetail')}}
                 style={styles.BoxAll}>
                 
                  <View style={{width:width*0.400,height:height*0.157}}>
                    <Image resizeMode={"stretch"} style={{width:width*0.400,height:height*0.157}} source={require("../../img/หน้าปก.png")}/>
                  </View>

                  <View style={{width:width*0.430,height:height*0.157,paddingLeft:5}}>
                  <Text style={styles.Text14}>ประชุมสัมมนาประชุมสัมมนาเชิงปฏิบัติการเรื่องการทำแผนประชุมสัมมนาเชิงปฏิบัติการเรื่องการทำแผนเชิงปฏิบัติการเรื่องการทำแผน ...</Text>
                  <Text style={styles.Text6}>   Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Text>
                  
                  <View style={{width:width*0.415,height:height*0.02,alignItems:"flex-end",backgroundColor:"#ffff"}}>
                    <Text style={styles.Text5}>ผู้โพส แอดมิน</Text>
                    <Text style={styles.Text5}>วันที่โพส 30 / 03 / 2564</Text>
                  </View>
                  
                  </View>                 
                </TouchableOpacity>
              
                </View>
              );
            }}
          />

           <View style={{alignSelf:"center",height:40,width:width*0.9,alignItems:"flex-end",marginTop:5}}>
           <TouchableOpacity
           onPress={()=>{navigation.navigate('NewsMore')}}>
             <Text style={styles.Text12}>ดูทั้งหมด {">>"}</Text>
           </TouchableOpacity>
           </View>
          {/* </ScrollView> */}

        </View>
            }

      {page == 2 && 
        <View style={{height:height*0.5,backgroundColor:"#ffff"}}>
          {/* <ScrollView> */}

        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <View>
                
              <TouchableOpacity
              onPress={()=>{navigation.navigate('ResearchDetail')}}
               style={styles.BoxAll}>
                <View style={{width:width*0.400,height:height*0.157,backgroundColor:"red"}}>
                <Image resizeMode={"stretch"} style={{width:width*0.400,height:height*0.157}} source={require("../../img/หน้าปก.png")}/>
                </View>
                <View style={{width:width*0.430,height:height*0.157,paddingLeft:5}}>
                <Text style={styles.Text14}>ตัวอย่างงานวิจัย</Text>
                <Text style={styles.Text6}>   Lorem Ipsum is simply dummy text of the print-ing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type andscrambled it to make a type specimen book.</Text>
                
                <View style={{width:width*0.415,height:height*0.02,alignItems:"flex-end",justifyContent:"flex-end"}}>
                  <Text style={styles.Text5}>ผู้โพส แอดมิน</Text>
                  <Text style={styles.Text5}>วันที่โพส 30 / 03 / 2564</Text>
                </View>
                
                </View>
                
              </TouchableOpacity>
              
              </View>
            );
          }}
        />
         <View style={{alignSelf:"center",height:height*0.05,width:width*0.9,alignItems:"flex-end",marginTop:5}}>
           <TouchableOpacity
           onPress={()=>{navigation.navigate('ResearchMore')}}>
           <Text style={styles.Text12}>ดูทั้งหมด {">>"}</Text>
           </TouchableOpacity>
         </View>
        {/* </ScrollView> */}
        
           
            
          </View>
          }

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:width,height:height,backgroundColor: "#ffff",alignSelf:'center'
  },
  BoxAll:{width:width*0.9,height:height*0.184,alignSelf:"center",marginTop:10,borderRadius:10,borderWidth:1,borderColor:"#FCB6D0",alignItems:"center",justifyContent:"center",flexDirection:"row"},
  Text5:{fontSize:5,fontFamily:'Prompt-Regular'},
  Text6:{fontSize:6,fontFamily:'Prompt-Regular',height:height*0.085},
  Text12:{fontSize:12,fontFamily:'Prompt-Regular',color:"#C13B78"},
  Text14:{fontSize:14,fontFamily:'Prompt-Bold',width:width*0.415,height:height*0.052}
});
