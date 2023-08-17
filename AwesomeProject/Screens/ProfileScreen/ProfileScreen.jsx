import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <ImageBackground
        source={require("../../assets/images/BG.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.container}>
          <View style={styles.profileContainer}>
            <View style={styles.avatar}>
              <Image
                style={styles.photo}
                source={require("../../assets/images/user-photo.jpg")}
              />
              <Image
                style={styles.deleteIcon}
                source={require("../../assets/images/delete.png")}
              />
            </View>
            <Pressable
              style={styles.logOut}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={require("../../assets/images/logout.png")} />
            </Pressable>
            <Text style={styles.title}>Natali Romanova</Text>
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
                    source={require("../../assets/images/comment-active.png")}
                  />
                  <Text style={styles.commentNumber}>8</Text>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/like.png")}
                  />
                  <Text style={styles.commentNumber}>153</Text>
                </View>
                <View style={styles.locationWrap}>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/map-pin.png")}
                  />
                  <Text style={styles.location}>Ukraine</Text>
                </View>
              </View>
            </View>
            <View style={styles.postWrap}>
              <Image
                style={styles.postImage}
                source={require("../../assets/images/img-2.jpg")}
              />
              <Text style={styles.postTitle}>Захід на Чорному морі</Text>
              <View style={styles.postInfoWrap}>
                <View style={styles.commentsWrap}>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/comment-active.png")}
                  />
                  <Text style={styles.commentNumber}>3</Text>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/like.png")}
                  />
                  <Text style={styles.commentNumber}>200</Text>
                </View>
                <View style={styles.locationWrap}>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/map-pin.png")}
                  />
                  <Text style={styles.location}>Ukraine</Text>
                </View>
              </View>
            </View>
            <View style={styles.postWrap}>
              <Image
                style={styles.postImage}
                source={require("../../assets/images/img-3.jpg")}
              />
              <Text style={styles.postTitle}>Старий будиночок у Венеції</Text>
              <View style={styles.postInfoWrap}>
                <View style={styles.commentsWrap}>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/comment-active.png")}
                  />
                  <Text style={styles.commentNumber}>50</Text>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/like.png")}
                  />
                  <Text style={styles.commentNumber}>200</Text>
                </View>
                <View style={styles.locationWrap}>
                  <Image
                    style={styles.postImage}
                    source={require("../../assets/images/map-pin.png")}
                  />
                  <Text style={styles.location}>Italy</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 147,
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
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  deleteIcon: {
    position: "absolute",
    bottom: 8,
    right: -18,
  },
  profileContainer: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingLeft: 8,
    paddingRight: 8,
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
  logOut: {
    position: "absolute",
    top: 2,
    right: -4,
    padding: 20,
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
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 6,
    marginRight: 24,
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
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 31,
    backgroundColor: "#fff",
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
