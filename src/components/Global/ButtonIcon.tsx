import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { FunctionComponent } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Color } from "../../utils/Colors";

type KeyValueObject = Record<string, any>;

const name: KeyValueObject = {
  settings: "settings",
  notifications: "notifications",
};

const ButtonIcon: FunctionComponent<Props> = ({ iconName }) => {
  const iconNameMapped = name[iconName];
  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons name={iconNameMapped} size={30} color="black" />
    </TouchableOpacity>
  );
};
interface Props {
  iconName: string;
}
export default ButtonIcon;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 50,
    borderRadius: 16,
    backgroundColor: Color.background2,
    alignItems: "center",
    justifyContent: "center",
  },
});
