import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { SecondaryButton } from "../components/Button/Button";

const CreatePostsScreen = () => {
  return (
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
        <TextInput style={styles.input} placeholder="Місцевість..."></TextInput>
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
    paddingTop: 32,
  },
  photoWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#e8e8e8",
    borderRadius: 8,
    position: "relative",
    marginBottom: 8,
  },
  cameraIconWrap: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translate: -50 }],
  },
  cameraIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoAction: {
    fontSize: 16,
    color: "#bdbdbd",
    marginBottom: 32,
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
  publishBtnWrap: {},
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
