import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  addComment,
  currentPosts,
  addCurrentComments,
  currentComments,
} from "../../Redux/rootReducer";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";
import urid from "urid";
import { getAuth } from "firebase/auth";

const updateDataInFirestore = async (collectionName, docId, update) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      comments: update,
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};

const CommentsScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const date = Date();
  const commentId = urid();
  const currentUser = getAuth();
  const postComments = useSelector(currentComments);

  const { id } = route.params;
  const posts = useSelector(currentPosts);
  const [comment, setComment] = useState(null);
  const post = posts.filter((item) => {
    return item.id === id;
  });

  const allComments = postComments.filter((com) => {
    if (com) {
      return com.id === id;
    }
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.goBack}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image source={require("../../assets/images/arrow-left.png")} />
          </Pressable>
          <Text style={styles.headerTitle}>Коментарі</Text>
        </View>
        <View style={styles.main}>
          <Image style={styles.image} src={post.uriImage} />
          <View style={styles.comments}>
            {post[0].id === id &&
              post[0].comments.map((comment) => {
                return (
                  <View key={comment.commentId} style={styles.commentsItemOwn}>
                    {currentUser.currentUser.photoURL ? (
                      <Image
                        style={styles.commentsImage}
                        src={currentUser.currentUser.photoURL}
                      />
                    ) : (
                      <Image
                        style={styles.commentsImage}
                        source={require("../../assets/images/default-avatar.jpg")}
                      />
                    )}

                    <View style={styles.textWrapOwn}>
                      <Text style={styles.commentsText}>{comment.comment}</Text>
                      <Text style={styles.commentsDate}>{comment.date}</Text>
                    </View>
                  </View>
                );
              })}
          </View>
          <View style={styles.btnWrap}>
            <TextInput
              onChangeText={setComment}
              value={comment}
              style={styles.input}
              placeholder="Коментувати..."
            ></TextInput>
            <Pressable
              style={styles.btnIcon}
              onPress={() => {
                dispatch(addCurrentComments({ id, comment, date, commentId }));
                dispatch(addComment({ id, comment, date, commentId }));
                updateDataInFirestore("posts", id, [
                  ...allComments,
                  { comment, date, commentId },
                ]);
                setComment(null);
                console.log(allComments);
              }}
            >
              <Image source={require("../../assets/images/Send.png")} />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    backgroundColor: "#fff",
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
    left: -10,
    top: -10,
    padding: 20,
  },
  main: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  image: {
    marginBottom: 32,
  },
  comments: {
    marginBottom: 8,
  },
  commentsItemOwn: {
    flexDirection: "row",
    columnGap: 16,
    marginBottom: 24,
  },
  commentsItem: {
    flexDirection: "row-reverse",
  },
  commentsImage: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  textWrapOwn: {
    width: 299,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
  },
  textWrap: {
    borderRadius: 6,
    borderTopRightRadius: 0,
  },
  commentsText: {
    color: "#212121",
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 8,
  },
  commentsDate: {
    color: "#bdbdbd",
    fontSize: 10,
    textAlign: "right",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#e8e8e8",
    color: "#bdbdbd",
    borderRadius: 100,
    paddingLeft: 16,
    fontSize: 16,
    fontWeight: "500",
  },
  btnWrap: {
    position: "relative",
  },
  btnIcon: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});

export default CommentsScreen;
