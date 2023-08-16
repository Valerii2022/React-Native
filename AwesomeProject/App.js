import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image } from "react-native";

import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";
import Home from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";
import Logout from "./Screens/components/Logout/logout";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ title: "Реєстрація" }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Увійти" }}
        />
        <MainStack.Screen
          name="Home"
          component={PostsScreen}
          options={{
            title: "Публікації",
            headerStyle: {
              borderBottomColor: "#b3b3b3",
              borderBottomWidth: 1,
            },
            headerTintColor: "#212121",
            headerTitleStyle: {
              fontFamily: "Roboto",
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 22,
              letterSpacing: -0.41,
              paddingLeft: 70,
            },
            headerRight: () => (
              <Image
                style={styles.logOut}
                source={require("./assets/images/logout.png")}
              />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
  // return <CommentsScreen />;
  // return <CreatePostsScreen />;
  // return <Home />;
  // return <LoginScreen />;
  // return <MapScreen />;
  // return <PostsScreen />;
  // return <ProfileScreen />;
  // return <RegistrationScreen />;
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
  logOut: { marginRight: 8 },
});
