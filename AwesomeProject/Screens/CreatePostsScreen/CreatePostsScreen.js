import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../config";
import SecondaryButton from "../components/Button/SecondaryButton";
import { useNavigation } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { addPost, removePost } from "../../Redux/rootReducer";
import { getAuth } from "firebase/auth";

const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = getAuth();
  const userId = user.currentUser.uid;

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [uriImage, setUriImage] = useState(null);
  const [location, setLocation] = useState(null);
  const [postName, setPostName] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const comments = [];
  const likes = null;

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const closeCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    await MediaLibrary.requestPermissionsAsync();

    setHasPermission(status === "granted");
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const writeDataToFirestore = async (
    uid,
    postName,
    postLocation,
    location,
    uriImage,
    comments,
    likes
  ) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        uid,
        postName,
        postLocation,
        location,
        uriImage,
        comments,
        likes,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const onPublish = async () => {
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocation(coords);
    writeDataToFirestore(
      userId,
      postName,
      postLocation,
      location,
      uriImage,
      comments,
      likes
    );
    dispatch(
      addPost({
        userId,
        postName,
        postLocation,
        location,
        uriImage,
        comments,
        likes,
      })
    );
    setLocation("");
    setUriImage(null);
    setPostName("");
    setPostLocation("");
    closeCamera();
    navigation.navigate("Posts");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable
            style={styles.goBack}
            onPress={() => {
              closeCamera();
              navigation.navigate("Posts");
            }}
          >
            <Image source={require("../../assets/images/arrow-left.png")} />
          </Pressable>
          <Text style={styles.headerTitle}>Створити публікацію</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.photoWrapper}>
            <View style={styles.cameraContainer}>
              <Camera
                style={styles.camera}
                type={type}
                ref={setCameraRef}
                ratio={"1:1"}
              >
                <View style={styles.photoView}>
                  <TouchableOpacity
                    style={styles.flipContainer}
                    onPress={() => {
                      setType(
                        type === Camera.Constants.Type.back
                          ? Camera.Constants.Type.front
                          : Camera.Constants.Type.back
                      );
                    }}
                  >
                    <Image
                      style={{
                        width: 60,
                        height: 60,
                        marginTop: 10,
                        marginRight: 10,
                        opacity: 0.3,
                      }}
                      source={require("../../assets/images/flip2.png")}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={async () => {
                      if (cameraRef) {
                        const { uri } = await cameraRef.takePictureAsync();
                        await MediaLibrary.createAssetAsync(uri);
                        setUriImage(uri);
                      }
                    }}
                  >
                    <View style={styles.takePhotoOut}>
                      <View style={styles.takePhotoInner}>
                        <Image
                          style={styles.cameraIcon}
                          source={require("../../assets/images/camera.png")}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </Camera>
            </View>
          </View>
          <Text style={styles.photoAction}>Завантажте фото</Text>
          <TextInput
            value={postName}
            onChangeText={setPostName}
            style={styles.input}
            placeholder="Назва..."
          ></TextInput>
          <View style={styles.inputLocationWrap}>
            <Image
              style={styles.inputIcon}
              source={require("../../assets/images/map-pin.png")}
            />
            <TextInput
              value={postLocation}
              onChangeText={setPostLocation}
              style={[styles.input, styles.inputLocation]}
              placeholder="Місцевість..."
            ></TextInput>
          </View>
          <View style={styles.publishBtnWrap}>
            <SecondaryButton onPress={onPublish} title={"Опублікувати"} />
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.btnWrap}>
            <SecondaryButton title={""} />
            <Image
              style={styles.btnIcon}
              source={require("../../assets/images/trash.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    flexDirection: "column",
    minHeight: "100%",
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
    left: -6,
    top: -8,
    padding: 20,
  },
  main: {
    flexGrow: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  },

  flipContainer: {
    flex: 0.5,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    height: 60,
    width: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    top: 0,
    left: 0,
  },

  takePhotoInner: {
    height: 60,
    width: 60,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 50,
  },
  photoWrapper: {
    width: "100%",
    height: 240,
    backgroundColor: "#f6f6f6",
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e8e8e8",
  },
  cameraIconWrap: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -30 }, { translateY: -30 }],
    borderRadius: 100,
  },
  cameraIcon: {
    position: "absolute",
    top: 18,
    left: 18,
  },
  photoAction: {
    fontFamily: "Roboto",
    fontSize: 16,
    color: "#bdbdbd",
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    color: "#212121",
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 18.75,
    padding: 16,
    paddingLeft: 0,
    marginBottom: 16,
    borderBottomColor: "#e8e8e8",
    borderBottomWidth: 1,
  },
  inputLocationWrap: {
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    top: 13,
  },
  inputLocation: {
    paddingLeft: 28,
  },
  publishBtnWrap: {
    height: 50,
    marginBottom: 120,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 34,
  },
  btnWrap: {
    width: 70,
    height: 40,
  },
  btn: {
    backgroundColor: "#bdbdbd",
  },
  btnIcon: {
    position: "absolute",
    right: 23,
    top: 8,
  },
});

export default CreatePostsScreen;
