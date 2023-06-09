import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FunctionComponent } from "react";

const TitleViewAll: FunctionComponent<Props> = ({ title }) => {
  return (
    <View style={styles.containerTitle}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.subtitle}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};
interface Props {
  title: string;
}
export default TitleViewAll;

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "#2B2B2B",
    fontSize: 34,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#B0B0B0",
    fontSize: 17,
  },
});
