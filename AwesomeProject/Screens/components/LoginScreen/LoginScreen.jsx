import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/BG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Увійти</Text>
          <TextInput style={styles.input}>Адреса електронної пошти</TextInput>
          <TextInput style={styles.input} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  loginContainer: {
    width: "100%",
    height: 489,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    // marginTop: "auto",
    // marginBottom: 0,
    position: "fixed",
    left: 0,
    bottom: 0,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 33,
    marginLeft: "auto",
    marginRight: "auto",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f6f6f6",
    color: "#bdbdbd",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default LoginScreen;
