import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#b3b3b3",
          borderTopWidth: 1,
          height: 83,
          paddingTop: 9,
          paddingBottom: 34,
          paddingLeft: 40,
          paddingRight: 40,
        },
      })}
    >
      <Tabs.Screen
        options={{
          tabBarStyle: { display: "none" },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Pressable onPress={() => navigation.navigate("Posts")}>
              <Image source={require("../../assets/images/grid.png")} />
            </Pressable>
          ),
        }}
        name="Create"
        component={CreatePostsScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require("../../assets/images/Union.png")
              : require("../../assets/images/add-bar.png");

            const styles = focused
              ? {
                  paddingLeft: 28,
                  paddingRight: 28,
                  paddingBottom: 13,
                  paddingTop: 13,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  backgroundColor: "#FF6C00",
                }
              : {};

            return (
              <Pressable
                style={styles}
                onPress={() => navigation.navigate("Create")}
              >
                <Image source={icon} />
              </Pressable>
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />

      <Tabs.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            const icon = focused
              ? require("../../assets/images/user2.png")
              : require("../../assets/images/user.png");

            const styles = focused
              ? {
                  paddingLeft: 23,
                  paddingRight: 23,
                  paddingBottom: 8,
                  paddingTop: 8,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 100,
                  backgroundColor: "#FF6C00",
                }
              : {};

            return (
              <Pressable
                style={styles}
                onPress={() => navigation.navigate("Profile")}
              >
                <Image source={icon} />
              </Pressable>
            );
          },
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
