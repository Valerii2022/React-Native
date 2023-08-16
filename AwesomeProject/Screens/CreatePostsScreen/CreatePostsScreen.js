import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import SecondaryButton from "../components/Button/SecondaryButton";

const CreatePostsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.goBack}
            source={require("../../assets/images/arrow-left.png")}
          />
          <Text style={styles.headerTitle}>Створити публікацію</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.photoWrapper}>
            <View style={styles.cameraIconWrap}>
              <Image
                style={styles.cameraIcon}
                source={require("../../assets/images/camera.png")}
              />
            </View>
          </View>
          <Text style={styles.photoAction}>Завантажте фото</Text>
          <TextInput style={styles.input} placeholder="Назва..."></TextInput>
          <View style={styles.inputLocationWrap}>
            <Image
              style={styles.inputIcon}
              source={require("../../assets/images/map-pin.png")}
            />
            <TextInput
              style={[styles.input, styles.inputLocation]}
              placeholder="Місцевість..."
            ></TextInput>
          </View>
          <View style={styles.publishBtnWrap}>
            <SecondaryButton title={"Опублікувати"} />
          </View>
        </View>

        <View style={styles.footer}>
          <View style={styles.btnWrap}>
            <SecondaryButton title={""} />
            <Image
              style={styles.btnIcon}
              source={require("../../assets/images/trash.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flexDirection: "column",
    minHeight: "100%",
  },
  header: {
    paddingTop: 11,
    paddingBottom: 11,
    borderBottomColor: "#b3b3b3",
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: "Roboto",
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 22,
    letterSpacing: -0.41,
    textAlign: "center",
  },
  goBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  main: {
    flexGrow: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  photoWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    position: "relative",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  cameraIconWrap: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    borderRadius: 100,
  },
  cameraIcon: {
    position: "absolute",
    top: 18,
    left: 18,
  },
  photoAction: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#bdbdbd",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    color: "#bdbdbd",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
    paddingLeft: 0,
    marginBottom: 16,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
  },
  inputLocationWrap: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    top: 13,
  },
  inputLocation: {
    paddingLeft: 28,
  },
  publishBtnWrap: {
    height: 50,
    marginBottom: 120,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 34,
  },
  btnWrap: {
    width: 70,
    height: 40,
  },
  btn: {
    backgroundColor: "#bdbdbd",
  },
  btnIcon: {
    position: "absolute",
    right: 23,
    top: 8,
  },
});

export default CreatePostsScreen;
