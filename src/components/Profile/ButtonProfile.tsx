import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Color } from "../../utils/Colors";

const ButtonProfile = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>
        <Image style={styles.icon} source={require("../../assets/dog.png")} />
        <Text style={styles.text}>My pets</Text>
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonProfile;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: Color.background,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  text: {
    fontSize: 15,
  },
});
