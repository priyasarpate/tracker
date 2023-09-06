import React, { useState, useRef } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const otpInputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (value.length === 1 && index < 4) {
      otpInputRefs.current[index + 1].focus();
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            onChangeText={(value) => handleOtpChange(index, value)}
            value={digit}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => (otpInputRefs.current[index] = ref)}
          />
        ))}
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
    backgroundColor: "#fff"
  },
});
