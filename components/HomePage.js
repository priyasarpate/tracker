import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHead}>Welcome to the Child Care Hub</Text>
      <Text style={styles.subHead}>
        Your one step can make someone's life beautiful⭐
      </Text>
      <View style={styles.boxView}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("AdoptChild")}
        >
          <Text style={styles.boxText}>Adopt Child</Text>
        </TouchableOpacity>

        {/* Help the Child Box */}
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("HelpChild")}
        >
          <Text style={styles.boxText}>Help the Child</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  mainHead: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 30,
    paddingBottom: 0,
  },
  subHead: {
    fontSize: 15,
    paddingBottom: 10,
    padding: 30,
  },
  boxView: {
    marginTop: 30,
  },
  box: {
    width: 300,
    height: 100,
    backgroundColor: "#3498db",
    marginVertical: 10, // Adjusted margin
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  boxText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
