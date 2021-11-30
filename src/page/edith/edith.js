import React, { useState, useRef,useEffect } from "react";
import { StyleSheet, Text, View,TextInput,Dimensions,Image, TouchableOpacity,FlatList,Modal} from "react-native";
import { AntDesign, Entypo,FontAwesome5 } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
import { SafeAreaView } from "react-native-safe-area-context";
import MainModal from "./component/modal"

const { width, height } = Dimensions.get("window");

export default App = ({ navigation, route }) => {
  const RBSheets = useRef();
  const [heightSheet, setheightSheet] = useState(height*0.8);
  const [page, setPage] = useState(0);
  const [search, setsearch] = useState("");
  const [visible, setVisible] = useState(false);

  const DATA = [
    {
      imageURL: require("../../image/monday.png"),
    },
    {
      imageURL: require("../../image/tuesday.png"),
    },
    {
      imageURL: require("../../image/wednesday.png"),
    },
    {
      imageURL: require("../../image/thursday.png"),
    },
    {
      imageURL: require("../../image/friday.png"),
    },
    {
      imageURL: require("../../image/saturday.png"),
    },
  ];

  const DATAHOT = [
    {
      imageURL: require("../../image/image_hot.png"),
    },
    {
      imageURL: require("../../image/image_hot.png"),
    },
  ];

  const DATANOHOT = [
    {
      imageURL: require("../../image/image_nohot.png"),
    },
    {
      imageURL: require("../../image/image_nohot.png"),
    },
    {
      imageURL: require("../../image/image_nohot.png"),
    },
    {
      imageURL: require("../../image/image_nohot.png"),
    },
  ];

  const DATASALE = [
    {
      imageURL: require("../../image/image_sale.png"),
    },
    {
      imageURL: require("../../image/image_sale.png"),
    },
  ];

  const SALE = [
    {
      imageURL: require("../../image/sale.png"),
    },
    {
      imageURL: require("../../image/sale.png"),
    },
    {
      imageURL: require("../../image/sale.png"),
    },
    {
      imageURL: require("../../image/sale.png"),
    },
  ];

  const numColumns = 2;

  function pagePopUp() {
    if (page == 0) {
      return (
        <View
          style={{
            height: height,
            width: width,
            backgroundColor:'#C5E5FE'
          }}
        >
    <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,flexDirection:'row'}}>
    <Image source={require("../../image/search.png")} style={{alignSelf:'center',width:25,height:25,resizeMode:'contain',justifyContent:'center',marginLeft:10}}/>
          <TextInput
            style={{
              width: width * 0.73,
              height: 30,
              justifyContent: "center",
              paddingHorizontal:5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              alignSelf:'center',paddingHorizontal:10
            }}
            onChangeText={(search) => setsearch(search)}
            defaultValue={search}
            placeholder="ค้นหา"
          />
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.8,alignSelf:'center',marginTop:10}}>
         <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:'#74B4E3'}}>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ทั้งหมด</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ลดราคา</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>สินค้าใหม่</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>โปรโมชั่น</Text>
         </TouchableOpacity>
         </View>
         <View style={{ backgroundColor:'#C5E5FE', marginTop: 15}}>
        <FlatList
          data={DATAHOT}
          numColumns={numColumns}
          style={{ backgroundColor: "#C5E5FE", width: width*0.8 ,alignSelf:'center'}}
          renderItem={({ item, index }) => {
            console.log("ไอเท็ม",item);
            return (
              <TouchableOpacity onPress={() => setVisible((val) => !val)}
              style={{backgroundColor:'#FFFFFF',marginTop:10,alignSelf:'center',justifyContent:'center',width:width*0.4,
                                height:100,backgroundColor:'#C5E5FE'}}>
                <Image source={item.imageURL} style={{ width: width*0.4, height: 100, resizeMode: "contain",justifyContent:'center',alignSelf:'center'}}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ backgroundColor:'#C5E5FE'}}>
        <FlatList
          data={DATANOHOT}
          numColumns={numColumns}
          style={{ backgroundColor: "#C5E5FE", width: width*0.8 ,alignSelf:'center'}}
          renderItem={({ item, index }) => {
            console.log("ไอเท็ม",item);
            return (
              <TouchableOpacity style={{backgroundColor:'#FFFFFF',marginTop:10,alignSelf:'center',justifyContent:'center',width:width*0.4,
                                height:100,backgroundColor:'#C5E5FE'}}>
                <Image source={item.imageURL} style={{ width: width*0.4, height: 100, resizeMode: "contain",justifyContent:'center',alignSelf:'center'}}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>
        </View>
      );
    }
    if (page == 1) {
      return (
        <View
          style={{
            height: height,
            width: width,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,flexDirection:'row'}}>
    <Image source={require("../../image/search.png")} style={{alignSelf:'center',width:25,height:25,resizeMode:'contain',justifyContent:'center',marginLeft:10}}/>
          <TextInput
            style={{
              width: width * 0.73,
              height: 30,
              justifyContent: "center",
              paddingHorizontal:5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              alignSelf:'center',paddingHorizontal:10
            }}
            onChangeText={(search) => setsearch(search)}
            defaultValue={search}
            placeholder="ค้นหา"
          />
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.8,alignSelf:'center',marginTop:10}}>
         <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:'#74B4E3'}}>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ทั้งหมด</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ลดราคา</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>สินค้าใหม่</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>โปรโมชั่น</Text>
         </TouchableOpacity>
         </View>
         <View style={{ backgroundColor:'#C5E5FE', marginTop: 15,height:110}}>
        <FlatList
          data={DATASALE}
          numColumns={numColumns}
          style={{ backgroundColor: "#C5E5FE", width: width*0.8 ,alignSelf:'center'}}
          renderItem={({ item, index }) => {
            console.log("ไอเท็ม",item);
            return (
              <TouchableOpacity onPress={() => setVisible((val) => !val)}
                style={{backgroundColor:'#FFFFFF',marginTop:10,alignSelf:'center',justifyContent:'center',width:width*0.4,
                                height:100,backgroundColor:'#C5E5FE'}}>
                <Image source={item.imageURL} style={{ width: width*0.4, height: 100, resizeMode: "contain",justifyContent:'center',alignSelf:'center'}}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ backgroundColor:'#C5E5FE'}}>
        <FlatList
          data={SALE}
          numColumns={numColumns}
          style={{ backgroundColor: "#C5E5FE", width: width*0.8 ,alignSelf:'center'}}
          renderItem={({ item, index }) => {
            console.log("ไอเท็ม",item);
            return (
              <TouchableOpacity style={{backgroundColor:'#FFFFFF',marginTop:10,alignSelf:'center',justifyContent:'center',width:width*0.4,
                                height:100,backgroundColor:'#C5E5FE'}}>
                <Image source={item.imageURL} style={{ width: width*0.25, height: 100, resizeMode: "contain",justifyContent:'center',alignSelf:'center',backgroundColor:'#FFFFFF'}}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>
        </View>
      );
    }
    if (page == 2) {
      return (
        <View
          style={{
            height: height,
            width: width,
            alignItems: "center",
            paddingTop: 20,
          }}
        >
           <View style={{width:width*0.8,alignSelf:'center',backgroundColor:'#FFFFFF',marginTop:10,flexDirection:'row'}}>
          <Image source={require("../../image/search.png")} style={{alignSelf:'center',width:25,height:25,resizeMode:'contain',justifyContent:'center',marginLeft:10}}/>
          <TextInput
            style={{
              width: width * 0.73,
              height: 30,
              justifyContent: "center",
              paddingHorizontal:5,
              fontFamily: "Kanit-Regular",
              fontSize: 16,
              alignSelf:'center',paddingHorizontal:10
            }}
            onChangeText={(search) => setsearch(search)}
            defaultValue={search}
            placeholder="ค้นหา"
          />
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:width*0.8,alignSelf:'center',marginTop:10}}>
         <TouchableOpacity style={{borderBottomWidth:1,borderBottomColor:'#74B4E3'}}>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ทั้งหมด</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>ลดราคา</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>สินค้าใหม่</Text>
         </TouchableOpacity>
         <TouchableOpacity>
           <Text style={{fontSize:14,fontFamily:'Kanit-Regular'}}>โปรโมชั่น</Text>
         </TouchableOpacity>
         </View>
         <View style={{ backgroundColor:'#C5E5FE', marginTop: 15}}>
        <FlatList
          data={DATA}
          style={{ backgroundColor: "#C5E5FE", width: width*0.8 ,alignSelf:'center'}}
          renderItem={({ item, index }) => {
            console.log("ไอเท็ม",item);
            return (
              <TouchableOpacity style={{backgroundColor:'#FFFFFF',marginTop:10}}>
                <Image source={item.imageURL} style={{ width: 150, height: 50, resizeMode: "contain",alignSelf:'center',justifyContent:'center'}}/>
              </TouchableOpacity>
            );
          }}
        />
      </View>
        </View>
      );
    }
  }
  
  return (
      <View style={styles.container}>
      <SafeAreaView style={{backgroundColor:'#74B4E3'}}/>
     <RBSheet
        ref={RBSheets}
        height={heightSheet}
        // openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            alignItems: "center",
            borderRadius: 10,backgroundColor:'#C5E5FE',borderTopRightRadius:30,borderTopLeftRadius:30
          },
          draggableIcon: {
            width: width * 0.2,
          },
        }}
      >
        {pagePopUp()}
      </RBSheet>
      <Modal
        style={{ flex: 1, backgroundColor: "transparent" }}
        transparent={true}
        visible={visible}
      >
        <MainModal
          setVisible={setVisible}
        ></MainModal>
      </Modal>
    <View style={{width:width,height:100,backgroundColor:'#74B4E3',flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}}
    style={{alignSelf:'center',width:35,height:35,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <Image source={require("../../image/cancle.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{alignSelf:'center',width:35,height:35,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <Image source={require("../../image/left.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain',marginRight:20}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center',width:35,height:35,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <Image source={require("../../image/right.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    </View>
    
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={{alignSelf:'center',width:35,height:35,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <Image source={require("../../image/download.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain',marginRight:10}}/>
    </TouchableOpacity>
    <TouchableOpacity style={{alignSelf:'center',width:35,height:35,alignItems:'center',justifyContent:'center',marginTop:40}}>
    <Image source={require("../../image/share.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    </View>
    
    </View>
    
    <View style={{width:width*0.9,height:450,backgroundColor:'#FFFFFF',alignSelf:'center',marginTop:20,borderRadius:6,alignItems:'center'}}>
    </View>

    <View style={{width:width,height:70,backgroundColor:'#74B4E3',position:'absolute',bottom:0,flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,alignItems:'center'}}>
    <TouchableOpacity>
    <Image source={require("../../image/imageup.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setPage(0);
            setheightSheet(height*0.8);
            setTimeout(() => {
              RBSheets.current.open();
            }, 300);}}>
    <Image source={require("../../image/square.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setPage(1);
            setheightSheet(height*0.8);
            setTimeout(() => {
              RBSheets.current.open();
            }, 300);}}>
    <Image source={require("../../image/heart.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{setPage(2);
            setheightSheet(height*0.8);
            setTimeout(() => {
              RBSheets.current.open();
            }, 300);}}>
    <Image source={require("../../image/text.png")} style={{alignSelf:'center',width:30,height:30,resizeMode:'contain'}}/>
    </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEAEA",alignSelf:'center'
  },
});
