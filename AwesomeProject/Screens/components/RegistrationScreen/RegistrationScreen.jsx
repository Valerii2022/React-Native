import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
} from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.registration}>
        <View style={styles.registrationImg}></View>
        <Text style={styles.title}>Реєстрація</Text>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        {/* <Button>Зареєстуватися</Button> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7040ba",
    alignItems: "center",
    justifyContent: "center",
  },
  registration: {
    backgroundColor: "#fff",
    width: 332,
    height: 550,
    borderRadius: 25,
    padding: 16,
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    marginTop: 92,
    marginBottom: 33,
    marginLeft: "auto",
    marginRight: "auto",
    letterSpacing: 0.01,
    color: "#212121",
  },
  registrationImg: {
    position: "absolute",
    top: -60,
    left: 100,
    backgroundColor: "#f6f6f6",
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#f6f6f6",
    marginBottom: 16,
    borderRadius: 8,
  },
});

export default RegistrationScreen;
