import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  addCurrentPosts,
  removeCurrentPosts,
  currentPosts,
  unauthorized,
} from "../../Redux/rootReducer";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../config";

const PostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentUserPosts = useSelector(currentPosts);

  const currentUser = getAuth();

  useEffect(() => {
    (async () => {
      try {
        const posts = [];
        const snapshot = await getDocs(
          collection(db, "posts"),
          where("uid", "==", currentUser.currentUser.uid)
        );
        snapshot.forEach((doc) => posts.push({ id: doc.id, ...doc.data() }));
        dispatch(addCurrentPosts(posts));
      } catch (error) {
        throw error;
      }
    })();
  }, [currentUserPosts]);

  const logout = () => {
    dispatch(unauthorized());
    navigation.navigate("Login");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Публікації</Text>
          <Pressable style={styles.logOut} onPress={logout}>
            <Image source={require("../../assets/images/logout.png")} />
          </Pressable>
        </View>
        <View style={styles.main}>
          <View style={styles.user}>
            <Image
              style={styles.userAvatar}
              src={currentUser.currentUser.photoURL}
            />
            <View style={styles.userInfo}>
              <Text style={styles.userName}>
                {currentUser.currentUser.displayName}
              </Text>
              <Text style={styles.userEmail}>
                {currentUser.currentUser.email}
              </Text>
            </View>
          </View>
          {currentUserPosts.map((post) => {
            if (currentUser.currentUser.uid === post.uid) {
              return (
                <View key={post.id} style={styles.postWrap}>
                  <Image style={styles.postPhoto} src={post.uriImage} />
                  <Text style={styles.postTitle}>{post.postName}</Text>
                  <View style={styles.postInfoWrap}>
                    <View style={styles.commentsWrap}>
                      <Pressable
                        onPress={() => {
                          navigation.navigate("Comments", { id: post.id });
                        }}
                      >
                        {post.comments.length > 0 ? (
                          <Image
                            style={styles.postImage}
                            source={require("../../assets/images/comment-active.png")}
                          />
                        ) : (
                          <Image
                            style={styles.postImage}
                            source={require("../../assets/images/comment.png")}
                          />
                        )}
                      </Pressable>
                      {post.comments.length > 0 ? (
                        <Text style={styles.commentNumberActive}>
                          {post.comments.length}
                        </Text>
                      ) : (
                        <Text style={styles.commentNumber}>
                          {post.comments.length}
                        </Text>
                      )}
                    </View>

                    <View style={styles.locationWrap}>
                      <Pressable
                          onPress={() =>
                            navigation.navigate("Maps", {
                              currentCoords: post.location.coords,
                            })
                          }
                          style={styles.locationWrap}
                        >
                          <Image
                            style={styles.postImage}
                            source={require("../../assets/images/map-pin.png")}
                          />
                          <Text style={styles.location}>
                            {post.postLocation}
                          </Text>
                        </Pressable>
                    </View>
                  </View>
                </View>
              );
            }
          })}
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
    width: 60,
    height: 60,
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
  postPhoto: {
    borderRadius: 8,
    width: 343,
    height: 240,
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
  commentNumberActive: {
    color: "#212121",
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
