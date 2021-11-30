import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import Route from "./src/route/route";
import { useFonts } from "expo-font";

export default App = () => {
  const [loaded] = useFonts({
    "Kanit-Regular": require("./assets/fonts/Kanit-Regular.ttf"),
    "Kanit-Bold": require("./assets/fonts/Kanit-Bold.ttf"),
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Prompt-Bold": require("./assets/fonts/Prompt-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
  
      <View style={styles.container}>
        <Route />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
