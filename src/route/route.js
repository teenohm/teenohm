import * as React from "react";
import { View, Text, Image, Platform } from "react-native";
import { Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get("window");

import Menu from "../page/menu/menu";
import Login from "../page/login/login";
import Home from "../page/home/home";
import Forget from "../page/forget/forget";
import Regis from "../page/regis/regis"
import Newpassword from "../page/newpassword/newpassword"
import Profile from "../page/profile/profile";
import Namelist from "../page/name list/namelist"
import Comment from "../page/comment/comment";
import Calendar from "../page/mywork/calendar";
import Edith from "../page/edith/edith";
import Edithprofile from "../page/edithprofile/edithprofile"
import Logo from "../page/Logo/logo";
import Editpassword from"../page/editpassword/editpassword"
import Special from "../page/special/special";
import NewsMore from "../page/home/newsMore"
import NewsDetail from "../page/home/newsDetail"
import ResearchMore from "../page/home/researchMore"
import ResearchDetail from "../page/home/researchDetail"
import PrivilegesDetail from "../page/special/privilegesDetail"
import BenefitsDetail from "../page/special/benefitsDetail"
import Birthday from "../page/name list/birthday"
import BirthdayAll from "../page/name list/birthdayAll"
import Userdetail from "../page/name list/userdetail"
import Notification from "../page/notification/notification";
import Group from "../page/name list/group"


function Route() {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  

  function MyTabs() {
    return (
      // <LinearGradient
      //   colors={["#7C82ED", "blue"]}
      //   start={{ x: 0.1, y: 0.0 }}
      //   end={{ x: 0.3, y: 0.0 }}
      //   style={{ flex: 1 }}
      // >
     
      <Tab.Navigator   
        initialRouteName="Login"  
         screenOptions={{ headerShown: false }} 
        tabBarOptions={{
          // activeTintColor: "#e91e63",
          keyboardHidesTabBar: true,  
        }}     
        >
   
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
           tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: Platform.OS == "ios" ? 10 : 0,
                  // marginTop: 15,
                  width: width * 0.2,
                  height:height*0.1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:"#F8F9FA"
                  
                }}
              >
               {!focused?(
                <View>
                  <FontAwesome name="home" size={30} color="black" />
                </View>):(
                <View>
                  <FontAwesome name="home" size={35} color="#C13B78" />
                </View>)} 
                  <Text style={{fontSize:10,fontFamily:'Prompt-Regular',color:!focused ? '#FFFFFF' : '#C13B78'}}>หน้าหลัก</Text>
                </View>
            ),
          }}
        />

        <Tab.Screen
          name="12346"
          component={Calendar}
          options={{
          tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: Platform.OS == "ios" ? 10 : 0,
                  // marginTop: 15,
                  width: width * 0.2,
                  height:height*0.1,
                  alignItems: "center",
                  justifyContent: "center",
                   backgroundColor:"#F8F9FA"
                }}
              >
                {!focused?(
              <View>
                <FontAwesome name="calendar" size={24} color="black" />
              </View>):(
              <View>
                <FontAwesome name="calendar" size={29} color="#C13B78" />
              </View>)} 
                <Text style={{fontSize:10,fontFamily:'Prompt-Regular',color:!focused ? '#FFFFFF' : '#C13B78'}}>ปฏิทินวิจัย</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Namelist"
          component={Namelist}
          options={{
          tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  alignItems: "center",
                  paddingTop: Platform.OS == "ios" ? 10 : 0,
                  // marginTop: 15,
                  width: width * 0.2,
                  height:height*0.1,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:"#F8F9FA"
                }}
              >
                 {!focused?(
                <View>
                  <FontAwesome5 name="user-friends" size={24} color="black" />
                </View>):(
                <View>
                  <FontAwesome5 name="user-friends" size={29} color="#C13B78" />
                </View>)} 
                  <Text style={{fontSize:10,fontFamily:'Prompt-Regular',color:!focused ? '#FFFFFF' : '#C13B78'}}>รายชื่อ</Text>
                </View>
            ),
          }}
        />

        <Tab.Screen
          name="Special "
          component={Special}
          options={{
          tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  alignItems: "center",
                  // marginTop: 15,
                  width: width * 0.2,
                  height:height*0.1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: Platform.OS == "ios" ? 10 : 0,
                  backgroundColor:"#F8F9FA"
                }}
              >
                 {!focused?(
              <View>
                <FontAwesome5 name="gift" size={24} color="black" />
              </View>):(
              <View>
                <FontAwesome5 name="gift" size={29} color="#C13B78" />
              </View>)} 
                <Text style={{fontSize:10,fontFamily:'Prompt-Regular',color:!focused ? '#FFFFFF' : '#C13B78'}}>สิทธิพิเศษ</Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{                  
                  alignItems: "center",
                  // marginTop: 15,
                  width: width * 0.2,
                  height:height*0.1,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: Platform.OS == "ios" ? 10 : 0,
                  backgroundColor:"#F8F9FA"
                }}
              >
                 {!focused?(
              <View>
                <FontAwesome name="address-card" size={24} color="black" />
              </View>):(
              <View>
                <FontAwesome name="address-card" size={29} color="#C13B78" />
              </View>)} 
               <Text style={{fontSize:10,fontFamily:'Prompt-Regular',color:!focused ? '#FFFFFF' : '#C13B78'}}>ข้อมูล</Text>
              </View>
            ),
          }}
        />
        

      </Tab.Navigator>
      // </LinearGradient>
    );
  }

  function tab1(){
    <Stack.Screen name="Edithprofile" component={Edithprofile} />
  }

  function screen() {
    return (
      <Stack.Navigator headerMode="none" initialRouteName={"Login"}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Logo" component={Logo} />
        <Stack.Screen name="Home" component={MyTabs} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="Regis" component={Regis} />
        <Stack.Screen name="Newpassword" component={Newpassword} />
        <Stack.Screen name="Edith" component={Edith} />
        <Stack.Screen name="Edithprofile" component={Edithprofile} />
        <Stack.Screen name="Editpassword" component={Editpassword} />
        <Stack.Screen name="Special" component={Special} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
        <Stack.Screen name="ResearchDetail" component={ResearchDetail} />
        <Stack.Screen name="BenefitsDetail" component={BenefitsDetail} />
        <Stack.Screen name="PrivilegesDetail" component={PrivilegesDetail} />
        <Stack.Screen name="NewsMore" component={NewsMore} />
        <Stack.Screen name="ResearchMore" component={ResearchMore} />
        <Stack.Screen name="Birthday" component={Birthday} />
        <Stack.Screen name="BirthdayAll" component={BirthdayAll} />
        <Stack.Screen name="Userdetail" component={Userdetail} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Group" component={Group} />
      </Stack.Navigator>
    );
  }

  return (
    
    <NavigationContainer>
      {screen()}
    </NavigationContainer>
  );
  
}

export default Route;



