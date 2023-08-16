import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SecondaryButton } from "../components/Button/Button";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logOut}
          source={require("../../assets/images/arrow-left.png")}
        />
        <Text style={styles.headerTitle}>Створити публікацію</Text>
      </View>
      <View style={styles.main}></View>
      <View style={styles.footer}>
        <View style={styles.btnWrap}>
          <SecondaryButton style={styles.btn} title={""} />
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
  logOut: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  main: {
    flexGrow: 1,
    paddingLeft: 16,
    paddingRight: 16,
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
