import { Text, Pressable, StyleSheet } from "react-native";

export const Button = (props) => {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export const SecondaryButton = (props) => {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable style={[styles.button, styles.secondary]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};



const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    borderRadius: 100,
    elevation: 3,
    backgroundColor: "#FF6C00",
    
  },
  text: {
    fontSize: 16,
    lineHeight: 18.75,
    color: "#fff",
  },
  secondary: {
    backgroundColor: "#f6f6f6",
  }
});

