import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { SecondaryButton } from "../components/Button/Button";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.goBack}
          source={require("../../assets/images/arrow-left.png")}
        />
        <Text style={styles.headerTitle}>Коментарі</Text>
      </View>
      <View style={styles.main}>
        <Image
          style={styles.image}
          source={require("../../assets/images/img-1.jpg")}
        />
        <View style={styles.comments}>
          <View style={styles.commentsItem}>
            <View style={styles.textWrap}>
              <Image
                style={styles.commentImage}
                source={require("../../assets/images/com-1.png")}
              />
              <Text style={styles.commentsText}>
                Really love your most recent photo. I’ve been trying to capture
                the same thing for a few months and would love some tips!
              </Text>
              <Text style={styles.commentsDate}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>
          <View style={styles.commentsItem}>
            <Image
              style={styles.commentImage}
              source={require("../../assets/images/com-2.png")}
            />
            <View style={styles.textWrap}>
              <Text style={styles.commentsText}>
                A fast 50mm like f1.8 would help with the bokeh. I’ve been using
                primes as they tend to get a bit sharper images.
              </Text>
              <Text style={styles.commentsDate}>09 червня, 2020 | 09:14</Text>
            </View>
          </View>
          <View style={styles.commentsItem}>
            <Image
              style={styles.commentImage}
              source={require("../../assets/images/com-1.png")}
            />
            <View style={styles.textWrap}>
              <Text style={styles.commentsText}>
                Thank you! That was very helpful!
              </Text>
              <Text style={styles.commentsDate}>09 червня, 2020 | 09:20</Text>
            </View>
          </View>
        </View>
        <View style={styles.btnWrap}>
          <SecondaryButton title={"Коментувати..."} />
          <Image
            style={styles.btnIcon}
            source={require("../../assets/images/send.svg")}
          />
        </View>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
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
  goBack: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  main: {
    flexGrow: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  image: {
    marginBottom: 32,
  },
  comments: {
    marginBottom: 32,
  },
  commentsItem: {},
  commentsImage: {},
  commentsText: {},
  commentsDate: {},
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 9,
    paddingBottom: 34,
  },
  btnWrap: {},
  btnIcon: {},
});

export default CommentsScreen;
