import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Botón 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Botón 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
});
