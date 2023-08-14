import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";

export default function App() {
  return <LoginScreen />;
  // return <RegistrationScreen />;
  // return <PostsScreen />;
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
