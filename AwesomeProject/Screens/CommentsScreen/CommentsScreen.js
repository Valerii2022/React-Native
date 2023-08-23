import React, { useState } from "react";
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
  clearComments,
  addCurrentPosts,
  addPostComment,
  currentPosts,
} from "../../Redux/rootReducer";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";
import { nanoid } from "nanoid";

const updateDataInFirestore = async (collectionName, docId, update) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, {
      comments: [...update],
    });
    console.log("document updated");
  } catch (error) {
    console.log(error);
  }
};

const CommentsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const posts = useSelector(currentPosts);
  const dispatch = useDispatch();
  const [comment, setComment] = useState(null);
  const date = Date();
  const post = posts.filter((item) => {
    return item.id === id;
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
                  <View key={comment.id} style={styles.commentsItemOwn}>
                    <Image
                      style={styles.commentsImage}
                      source={require("../../assets/images/com-1.png")}
                    />
                    <View style={styles.textWrapOwn}>
                      <Text style={styles.commentsText}>{comment}</Text>
                      <Text style={styles.commentsDate}>
                        09 червня, 2020 | 08:40
                      </Text>
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
                console.log(posts);
                dispatch(addComment({ comment, id }));
                updateDataInFirestore("posts", id, comment);
                setComment(null);
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
  commentsImage: {},
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
