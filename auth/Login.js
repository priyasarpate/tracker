import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
  } from "react-native";
  
  export default function Login() {
    return (
      <View style={styles.account}>
        <Text style={styles.welText}>
          Welcome to<Text style={styles.maitryee}>ChildCareHub</Text>{" "}
        </Text>
        <View style={styles.emailPass}>
          <Text style={styles.emailText}>Enter your email and</Text>
          <Text style={styles.passText}>password for login on Maitryee.</Text>
        </View>
        <TouchableOpacity
          style={styles.googleBtn}
          onPress={() => console.log("Button Pressed")}
        >
          {" "}
          {/* <Image
            source={require("../assets/google.png")}
            style={{ width: 18, height: 18 }}
          /> */}
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TextInput
          placeholder="Enter your Email"
          style={styles.Email}
          placeholderTextColor="gray"
        />
        <TextInput
          placeholder="Password"
          style={styles.Password}
          placeholderTextColor="gray"
        />
        <TouchableOpacity
          style={styles.login}
          onPress={() => console.log("Button Pressed")}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.notAccount}>Dont't have an account</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    account: {
      margin: 10, // Adjust this margin as needed
      borderColor: "darkgray",
      borderWidth: 1,
      borderRadius: 5,
      padding: 15,
      marginTop: 120,
      paddingBottom: 30,
      paddingTop: 30,
    },
    welText: {
      fontSize: 18,
      textAlign: "center",
    },
    maitryee: {
      fontSize: 22,
      marginLeft: 5,
      fontWeight: "bold",
    },
    emailPass: {
      padding: 10,
    },
    emailText: {
      fontSize: 12,
      textAlign: "center",
      marginTop: 5,
    },
    passText: {
      fontSize: 12,
      textAlign: "center",
    },
    googleBtn: {
      width: "100%",
      height: 40,
      backgroundColor: "#FFF",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      borderColor: "lightgray",
      borderWidth: 1,
      marginTop: 15,
      marginBottom: 15,
      flexDirection: "row",
    },
    buttonText: {
      fontSize: 15,
      color: "black",
      fontWeight: 600,
      marginLeft: 10,
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: "#F3F3F3",
      marginTop: 10,
      marginBottom: 10,
    },
    Email: {
      width: "100%",
      height: 40,
      backgroundColor: "#FFF",
      borderRadius: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderColor: "#D3D3D3",
      fontSize: 16,
      marginTop: 15,
      marginBottom: 15,
    },
    Password: {
      width: "100%",
      height: 40,
      backgroundColor: "#FFF",
      borderRadius: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderColor: "#D3D3D3",
      fontSize: 16,
      marginTop: 15,
      marginBottom: 15,
    },
    login: {
      width: "100%",
      height: 40,
      backgroundColor: "#D95582",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 15,
      borderColor: "lightgray",
      borderWidth: 1,
      marginTop: 15,
      marginBottom: 15,
    },
    loginText: {
      fontSize: 15,
      color: "black",
      fontWeight: 600,
      color: "#fff",
    },
    notAccount: {
      fontSize: 15,
      fontWeight: "bold",
      color: "#D95582",
      textAlign: "center",
    },
  });
  