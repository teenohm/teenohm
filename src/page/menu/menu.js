import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Share } from "react-native";
import { Linking } from "react-native";


const { width, height } = Dimensions.get("screen");

export default function index({ navigation, route }) {
 

  return (
    <View style={{ marginTop: 20, alignItems: "center" }}>
      {/* <Image
        source={require("../../image/logocarekoon.png")}
        style={{
          height: 100,
          width: 200,
          alignSelf: "center",
          justifyContent: "center",
          resizeMode: "contain",
        }}
      /> */}

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Index");
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>หน้าแรก</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Agreement");
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>ข้อตกลงและเงื่อนไข</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Policy");
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>นโยบายความเป็นส่วนตัว</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Aboutck");
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>เกี่ยวกับเรา</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Contact");
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>ติดต่อเรา</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
        
        }}
        style={styles.tb}
      >
        <View style={styles.view}>
          <Text style={styles.font}>ออกจากระบบ</Text>
          <AntDesign name="right" size={24} color="#E6E6E6" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  font: {
    fontSize: 16,
    color: "#606060",
    fontFamily: "Kanit-Regular",
  },
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tb: {
    width: width * 0.5,
    height: 30,
    justifyContent: "center",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#E6E6E6",
  },
});
