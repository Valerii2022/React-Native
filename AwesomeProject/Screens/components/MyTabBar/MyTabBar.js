import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
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
          {/* <Image
            style={styles.btnIcon}
            source={require("../../../assets/images/Union.png")}
          /> */}
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Profile")}>
          <Image source={require("../../../assets/images/user.png")} />
        </Pressable>
        {/* <Image source={require("../../../assets/images/user.png")} /> */}
      </View>
      {/* {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            <Image source={require("../../../assets/images/logout.png")} />
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
    // gap: 31,
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
