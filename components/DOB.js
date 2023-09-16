import { View, Text, TextInput, StyleSheet } from "react-native";

export default function DOB() {
  return (
    <View style={styles.container}>
      <View>
        <Text>
            add date of birth..
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
});
