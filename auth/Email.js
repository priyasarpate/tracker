import { View, Text, TextInput, StyleSheet } from "react-native";

export default function Email() {
  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        <Text>
          welcome to maitryee enter your email password for login on maitreyee{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  otpInput: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
