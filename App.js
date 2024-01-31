import CreateAccount from "./auth/CreateAccount";
import { StyleSheet, View } from "react-native";
import Login from "./auth/Login";
import HomePage from "./components/HomePage";
import Stack from "./components/Stack"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateAccount /> */}
      {/* <Login /> */}
      {/* <HomePage /> */}
      <Stack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
