import { StyleSheet, View } from "react-native";
import React from "react";

const State = () => {
  return <View style={styles.container}></View>;
};

export default State;

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: 12,
    borderRadius: 12,
    backgroundColor: "green",
  },
});
