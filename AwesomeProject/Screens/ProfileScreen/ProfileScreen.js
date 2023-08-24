import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import {
  authorized,
  unauthorized,
  currentAuth,
  currentPosts,
} from "../../Redux/rootReducer";
import { getAuth } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentUser = getAuth();
  const currentUserPosts = useSelector(currentPosts);
  const [like, setLike] = useState(true);

  const logout = () => {
    dispatch(unauthorized());
    navigation.navigate("Login");
  };

  const updateDataInFirestore = async (collectionName, docId, update) => {
    try {
      const ref = doc(db, collectionName, docId);

      await updateDoc(ref, {
        likes: update,
      });
      console.log("document updated");
    } catch (error) {
      console.log(error);
    }
  };

  const likesCounter = (prev) => {
    if (prev === 0) {
      setLike(!like);
      return 1;
    }
    let current;
    if (like) {
      current = Number(prev) + 1;
    } else {
      current = Number(prev) - 1;
    }
    setLike(!like);

    return current;
  };

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
                src={currentUser.currentUser.photoURL}
              />
              <Image
                style={styles.deleteIcon}
                source={require("../../assets/images/delete.png")}
              />
            </View>
            <Pressable style={styles.logOut} onPress={logout}>
              <Image source={require("../../assets/images/logout.png")} />
            </Pressable>
            <Text style={styles.title}>
              {currentUser.currentUser.displayName}
            </Text>
            {currentUserPosts &&
              currentUserPosts.map((post) => {
                if (post.uid === currentUser.currentUser.uid) {
                  const postId = post.id;
                  return (
                    <View key={post.id} style={styles.postWrap}>
                      <Image style={styles.postImage} src={post.uriImage} />
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
                          <Pressable
                            onPress={() => {
                              updateDataInFirestore(
                                "posts",
                                postId,
                                likesCounter(post.likes)
                              );
                            }}
                            style={styles.postImage}
                          >
                            {post.likes ? (
                              <Image
                                source={require("../../assets/images/like.png")}
                              />
                            ) : (
                              <Image
                                source={require("../../assets/images/dislike.png")}
                              />
                            )}
                          </Pressable>
                          {post.likes ? (
                            <Text style={styles.commentNumberActive}>
                              {post.likes}
                            </Text>
                          ) : (
                            <Text style={styles.commentNumber}>0</Text>
                          )}
                        </View>
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
                  );
                }
              })}
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
    color: "#bdbdbd",
    fontFamily: "Roboto",
    fontSize: 16,
    marginLeft: 6,
    marginRight: 24,
  },
  commentNumberActive: {
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
