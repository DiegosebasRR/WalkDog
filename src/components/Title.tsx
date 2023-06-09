import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
const Title: FunctionComponent<Props> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

interface Props {
  title: String;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    color: "#2B2B2B",
    fontSize: 34,
    fontWeight: "bold",
  },
});
