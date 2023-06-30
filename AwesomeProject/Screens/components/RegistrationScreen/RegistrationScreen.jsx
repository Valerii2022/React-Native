import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";
import Button from "../Button/Button";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/BG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.registrationContainer}>
          <View style={styles.avatar}>
            <Image
              style={styles.addIcon}
              source={require("../../../assets/images/add.png")}
            />
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput style={styles.input} placeholder="Логін"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Адреса електронної пошти"
          ></TextInput>
          <View>
            <TextInput style={styles.input} placeholder="Пароль"></TextInput>
            <Text style={styles.inputLink}>Показати</Text>
          </View>
          <Button title={"Зареєструватися"} />
          <Text style={styles.text}>
            Вже є акаунт?
            <Text style={styles.textLink}> Увійти</Text>
          </Text>
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
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#f6f6f6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
  },
  addIcon: {
    position: "absolute",
    bottom: 14,
    right: -12,
  },
  registrationContainer: {
    width: "100%",
    height: 510,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: "auto",
    marginBottom: 0,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    marginBottom: 32,
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
  text: {
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
  textLink: {
    textDecorationLine: "underline",
  },
  inputLink: {
    position: "absolute",
    right: 16,
    top: 16,
    color: "#1B4371",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    textAlign: "center",
  },
});

export default RegistrationScreen;
