import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Публікації</Text>
          <Pressable
            style={styles.logOut}
            onPress={() => navigation.navigate("Login")}
          >
            <Image source={require("../../assets/images/logout.png")} />
          </Pressable>
        </View>
        <View style={styles.main}>
          <View style={styles.user}>
            <Image
              style={styles.userAvatar}
              source={require("../../assets/images/user.jpg")}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Natali Romanova</Text>
              <Text style={styles.userEmail}>email@example.com</Text>
            </View>
          </View>
          <View style={styles.postWrap}>
            <Image
              style={styles.postImage}
              source={require("../../assets/images/img-1.jpg")}
            />
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfoWrap}>
              <View style={styles.commentsWrap}>
                <Image
                  style={styles.postImage}
                  source={require("../../assets/images/comment.png")}
                />
                <Text style={styles.commentNumber}>0</Text>
              </View>
              <View style={styles.locationWrap}>
                <Image
                  style={styles.postImage}
                  source={require("../../assets/images/map-pin.png")}
                />
                <Text style={styles.location}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.postWrap}>
            <Image
              style={styles.postImage}
              source={require("../../assets/images/img-2.jpg")}
            />
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfoWrap}>
              <View style={styles.commentsWrap}>
                <Image
                  style={styles.postImage}
                  source={require("../../assets/images/comment.png")}
                />
                <Text style={styles.commentNumber}>0</Text>
              </View>
              <View style={styles.locationWrap}>
                <Image
                  style={styles.postImage}
                  source={require("../../assets/images/map-pin.png")}
                />
                <Text style={styles.location}>
                  Ivano-Frankivs'k Region, Ukraine
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 32,
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
    right: -10,
    top: -10,
    padding: 20,
  },
  main: {
    flexGrow: 1,
    paddingLeft: 8,
    paddingRight: 8,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userAvatar: {
    borderRadius: 16,
  },
  userInfo: {
    paddingLeft: 8,
  },
  userName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 16,
    color: "#212121",
  },
  userEmail: {
    fontFamily: "Roboto",
    fontSize: 11,
    lineHeight: 13,
    color: "#212121",
  },
  postWrap: {
    marginBottom: 34,
  },
  postImage: {
    marginBottom: 8,
  },
  postTitle: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8,
  },
  postInfoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentsWrap: {
    flexDirection: "row",
  },
  commentNumber: {
    color: "#bdbdbd",
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 6,
  },
  locationWrap: {
    flexDirection: "row",
  },
  location: {
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 6,
    textDecorationLine: "underline",
  },
});

export default PostsScreen;