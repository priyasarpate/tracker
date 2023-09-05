import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/welcome_img.png")} // Replace 'assets' with the actual folder where your image is located
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.heading}>
        Welcome {"\n"} beautiful, {"\n"}lady!
      </Text>
      <TextInput placeholder="+91 9999999999" style={styles.mobileNumber} />
      <TouchableOpacity
        style={styles.mobileBtn}
        onPress={() => console.log("Button Pressed")}
      >
        <Text style={styles.buttonText}>Hello</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD7F0",
    alignItems: "center",
    justifyContent: "start",
    paddingTop: 150,
  },
  heading: {
    fontSize: 34, // Adjust the font size as needed
    fontWeight: "semibold", // Make it bold
    textAlign: "center",
  },
  mobileNumber: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    fontSize: 16,
    marginTop: 100,
  },
  mobileBtn: {
    width: "80%",
    height: 50,
    backgroundColor: "#D95582",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
