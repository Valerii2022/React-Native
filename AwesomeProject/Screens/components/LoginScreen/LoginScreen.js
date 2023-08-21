import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../config";
import {
  authorized,
  unauthorized,
  currentAuth,
} from "../../../Redux/rootReducer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passSecure, setPassSecure] = useState(true);
  const [focusEmail, setFocusEmail] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const loginDB = async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(auth.currentUser.displayName);
      navigation.navigate("Home");
      dispatch(authorized());
      return credentials.user;
    } catch (error) {
      Alert.alert("Невірна адреса електронної пошти або пароль");
      navigation.navigate("Login");
      throw error;
    }
  };

  const onLogin = () => {
    // if (email === "" || password === "") {
    //   Alert.alert("Всі поля обов'язкові для заповнення!");
    //   return;
    // }
    // if (reg.test(email) === false) {
    //   Alert.alert("Невірний формат адреси електронної пошти!");
    //   return;
    // }
    // if (password.length < 6) {
    //   Alert.alert("Пароль має бути довжиною мінімум 6 символів!");
    //   return;
    // }
    // console.log(
    //   `Адреса електронної пошти - "${email}", пароль - "${password}"`
    // );
    loginDB({ email, password });
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={-208}
      >
        <ImageBackground
          source={require("../../../assets/images/BG.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput
              onFocus={() => {
                setFocusEmail(true);
              }}
              onBlur={() => {
                setFocusEmail(false);
              }}
              value={email}
              onChangeText={setEmail}
              style={
                focusEmail
                  ? [styles.textInput, styles.focusedTextInput]
                  : styles.textInput
              }
              placeholder="Адреса електронної пошти"
            ></TextInput>
            <View>
              <TextInput
                onFocus={() => {
                  setFocusPassword(true);
                }}
                onBlur={() => {
                  setFocusPassword(false);
                }}
                secureTextEntry={passSecure}
                value={password}
                onChangeText={setPassword}
                style={
                  focusPassword
                    ? [styles.textInput, styles.focusedTextInput]
                    : styles.textInput
                }
                placeholder="Пароль"
              ></TextInput>
              <Text
                style={styles.inputLink}
                onPress={() => {
                  setPassSecure(!passSecure);
                }}
              >
                {passSecure ? "Показати" : "Сховати"}
              </Text>
            </View>
            <View style={styles.btnWrap}>
              <Button title={"Увійти"} onPress={onLogin} />
            </View>
            <Text style={styles.text}>
              Немає акаунту?
              <Text
                style={styles.textLink}
                onPress={() => navigation.navigate("Registration")}
              >
                {" "}
                Зареєстуватися
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    height: 455,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
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
  textInput: {
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
  focusedTextInput: {
    backgroundColor: "#fff",
    borderColor: "#ff6c00",
    borderWidth: 1,
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
  btnWrap: {
    marginTop: 27,
    marginBottom: 16,
    height: 50,
  },
});

export default LoginScreen;
