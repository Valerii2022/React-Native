import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import MyTabBar from "../components/MyTabBar/MyTabBar";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  // <Tabs.Navigator>
  //   <Tabs.Screen style={styles.tab} name="Posts" component={PostsScreen} />
  //   <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
  //   <Tabs.Screen name="Profile" component={ProfileScreen} />
  // </Tabs.Navigator>

  return (
    <Tabs.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
