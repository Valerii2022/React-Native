import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import Button from "../Button/Button";
import { useNavigation } from "@react-navigation/native";

const MyTabBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Pressable onPress={() => navigation.navigate("Posts")}>
          <Image source={require("../../../assets/images/grid.png")} />
        </Pressable>
        <Pressable style={styles.btnWrap}>
          <Button title={""} />
          <Pressable
            style={styles.btnIcon}
            onPress={() => navigation.navigate("Create")}
          >
            <Image source={require("../../../assets/images/Union.png")} />
          </Pressable>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../../../assets/images/user.png")} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderTopColor: "#b3b3b3",
    borderTopWidth: 1,
    paddingTop: 9,
    paddingBottom: 34,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
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

export default MyTabBar;
