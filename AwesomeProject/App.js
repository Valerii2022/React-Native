import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
import { StyleSheet, Text, View } from "react-native";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/components/HomeScreen/HomeScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />
        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen name="Home" component={Home} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
  // return <LoginScreen />;
  // return <RegistrationScreen />;
  // return <PostsScreen />;
  // return <Home />;
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
