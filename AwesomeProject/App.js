// import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
// import { StyleSheet, Text, View, ImageBackground } from "react-native";
// import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";
const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function App() {
  return <LoginScreen></LoginScreen>;
  // return <RegistrationScreen></RegistrationScreen>;
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
