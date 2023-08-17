import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../components/Button/Button";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.goBack}
          source={require("../../assets/images/arrow-left.png")}
        />
        <Text style={styles.headerTitle}>Карта</Text>
      </View>
      <View style={styles.main}></View>
      <View style={styles.footer}>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/images/grid.png")}
        />
        <View style={styles.btnWrap}>
          <Button title={""} />
          <Image
            style={styles.btnIcon}
            source={require("../../assets/images/Union.png")}
          />
        </View>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/images/user.png")}
        />
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
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
    borderTopColor: "#b3b3b3",
    borderTopWidth: 1,
    paddingTop: 9,
    paddingBottom: 34,
  },
  btnWrap: {
    width: 70,
    height: 40,
  },
  btnIcon: {
    position: "absolute",
    right: 28,
    top: 13,
  },
});

export default MapScreen;
