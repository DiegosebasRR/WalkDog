import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
import { Color } from "../../utils/Colors";
const Title: FunctionComponent<Props> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

interface Props {
  title: String;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    color: Color.title,
    fontSize: 30,
    fontWeight: "bold",
  },
});
