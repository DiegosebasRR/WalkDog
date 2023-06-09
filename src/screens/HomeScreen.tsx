import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../components/Button";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Explore dong</Text>
      <View style={styles.buttonContainer}>
        <Button title="+ Ser Paseador" />
        <Button title="+ Pasear a tu perro" />
      </View>
      <Text style={styles.title}>Paseadores</Text>
      <Text style={styles.title}>Perros</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: "#2B2B2B",
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#B0B0B0",
    fontSize: 17,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
});
