import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
const Button: FunctionComponent<Props> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
interface Props {
  title: string;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    width: "100%",
    height: 50,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  text: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
});
export default Button;
