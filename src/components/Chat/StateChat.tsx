import { StyleSheet, View } from "react-native";
import React from "react";

const State = () => {
  return <View style={styles.container}></View>;
};

export default State;

const styles = StyleSheet.create({
  container: {
    height: 16,
    width: 16,
    borderRadius: 16,
    backgroundColor: "green",
  },
});
