import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen style={styles.tab} name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
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
