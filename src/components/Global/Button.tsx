import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
import { Color } from "../../utils/Colors";
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
    backgroundColor: Color.primary,
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
    color: Color.text,
    fontWeight: "500",
    fontSize: 15,
  },
});
export default Button;
