import "react-native-gesture-handler";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/components/LoginScreen/LoginScreen";
import RegistrationScreen from "./Screens/components/RegistrationScreen/RegistrationScreen";
import MapScreen from "./Screens/MapScreen/MapScreen";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import { store, persistor } from "./Redux/store";

const MainStack = createStackNavigator();

export default function App() {
  return (
    //  <Provider store={store}>
    // {/* <PersistGate loading={null} persistor={persistor}> */}
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
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Maps"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
    /* </PersistGate> */
    //  </Provider>
  );
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
