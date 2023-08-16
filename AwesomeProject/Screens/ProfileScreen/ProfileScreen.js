import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Button } from "../components/Button/Button";

const ProfileScreen = () => {
  return (
    <View>
      <ImageBackground
        source={require("../../../assets/images/BG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Image
                style={styles.addIcon}
                source={require("../../../assets/images/add.png")}
              />
            </View>
            <Image
              style={styles.logOut}
              source={require("../../assets/images/logout.png")}
            />
            <Text style={styles.title}>Natali Romanova</Text>
          </View>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    flexDirection: "column",
    minHeight: "100%",
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
  profileContainer: {
    flexGrow: 1,
    width: "100%",
    height: 515,
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
  logOut: {},
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

export default ProfileScreen;
