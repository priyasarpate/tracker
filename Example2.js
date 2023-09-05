import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import OTP from "./OTP"

export default function Example2() {
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={styles.scrollView}
    >
      <View style={styles.otpContainer}>
        <Image
          source={require("./assets/welcome_img.png")} // Replace 'assets' with the actual folder where your image is located
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.confirm}>confirmation code</Text>
        <Text style={styles.otpConfirm}>
         enter the one time code sent to the number 999999999
        </Text>
        {/* <TextInput placeholder="enter code" style={styles.otpNumber} /> */}
        <OTP />
        <TouchableOpacity
          style={styles.otpBtn}
          onPress={() => console.log("Button Pressed")}
        >
          <Text style={styles.otpText}>verify code </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.correct}> 🔙 correct the number</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFD7F0",
  },
  otpContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 150,
  },
  confirm: {
    fontSize: 34,
    textAlign: "center",
    color: "#3E1B40"
  },
  otpConfirm: {
    fontSize: 20,
    marginTop: 50,
    color: "#5C5470",
    padding: 15,
    textAlign: "center"

  },
  otpNumber: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderColor: "#D3D3D3",
    fontSize: 16,
  },
  otpBtn: {
    width: "80%",
    height: 50,
    backgroundColor: "#D95582",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  otpText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  correct: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#D95582",
   paddingTop: 30,
  }
});
