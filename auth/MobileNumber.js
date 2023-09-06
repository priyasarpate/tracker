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

export default function MobileNumber() {
  return (
    <ScrollView
      automaticallyAdjustKeyboardInsets={true}
      style={styles.scrollView}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/welcome_img.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.heading}>welcome beautiful, {"\n"}lady!</Text>
        <Text style={styles.loginText}>
          please enter to login and signup in maitreyee
        </Text>
        <TextInput placeholder="+91 9999999999" style={styles.mobileNumber} />
        <TouchableOpacity
          style={styles.mobileBtn}
          onPress={() => console.log("Button Pressed")}
        >
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.joinNow}>don't have accoun? join now</Text>
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  heading: {
    fontSize: 34,
    textAlign: "center",
    color: "#3E1B40"
  },
  loginText: {
    fontSize: 20,
    marginTop: 100,
    color: "#5C5470",
    padding: 15,

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
  },
  mobileBtn: {
    width: "80%",
    height: 50,
    backgroundColor: "#D95582",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  joinNow: {
    fontSize: 18,
    fontWeight: "bold",
    color:"#D95582",
   paddingTop: 30,
  }
});
