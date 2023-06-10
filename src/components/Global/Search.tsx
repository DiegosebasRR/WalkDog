import { StyleSheet, Text, View, TextInput, Image } from "react-native";
import React from "react";
import { Color } from "../../utils/Colors";
import { FontAwesome5 } from "@expo/vector-icons";
const Search = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="search" size={24} color="gray" />
      <TextInput style={styles.seach} placeholder="Search..."></TextInput>
      <FontAwesome5 name="filter" size={24} color="gray" />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Color.background2,
    width: "100%",
    height: 46,
    alignItems: "center",
    padding: 10,
    borderRadius: 14,
  },
  seach: {
    width: "80%",
    marginHorizontal: 12,
  },
});
