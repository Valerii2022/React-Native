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
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          // options={{
          //   title: "Публікації",
          //   headerStyle: {
          //     borderBottomColor: "#b3b3b3",
          //     borderBottomWidth: 1,
          //   },
          //   headerTintColor: "#212121",
          //   headerTitleStyle: {
          //     fontFamily: "Roboto",
          //     fontSize: 17,
          //     fontWeight: 500,
          //     lineHeight: 22,
          //     letterSpacing: -0.41,
          //     paddingLeft: 70,
          //   },
          //   headerRight: () => (
          //     <Image
          //       style={styles.logOut}
          //       source={require("./assets/images/logout.png")}
          //     />
          //   ),
          // }}
          options={{
            headerShown: false,
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
// ============================================================================================================================
// import * as React from 'react';
// import { Text, View, Button, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// function TestScreen() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 			<Text>Test!</Text>
// 		</View>
// 	);
// }

// function HomeScreen(props) {
// 	const gotoTestStackScreen = () => {
// 		props.navigation.navigate('Test');
// 	};
// 	return (
// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 			<Text>Home!</Text>
// 			<Button title="Go to test stack screen" onPress={gotoTestStackScreen} />
// 		</View>
// 	);
// }

// function SettingsScreen() {
// 	return (
// 		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// 			<Text>Settings!</Text>
// 		</View>
// 	);
// }

// function MyTabBar({ state, descriptors, navigation }) {
//   return (
//     <View style={{ flexDirection: 'row',backgroundColor:"#F4AF5F",height:50,borderRadius:50,justifyContent:"center",alignItems:"center" }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityStates={isFocused ? ['selected'] : []}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1, alignItems:"center" }}
//           >
//             <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
//               {label}
//             </Text>
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// function MyTabs() {
// 	return (
// 		<Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
// 			<Tab.Screen name="Home" component={HomeScreen} />
// 			<Tab.Screen name="Settings" component={SettingsScreen} />
// 		</Tab.Navigator>
// 	);
// }

// const Stack = createStackNavigator();

// export default function App() {
// 	return (
// 		<NavigationContainer>
// 			<Stack.Navigator initialRouteName="Tabs">
// 				<Stack.Screen name="Test" component={TestScreen} />
// 				<Stack.Screen name="Tabs" component={MyTabs} />
// 			</Stack.Navigator>
// 		</NavigationContainer>
// 	);
// }
