import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color } from "../../utils/Colors";
import StateChat from "./StateChat";
import CircularPhoto from "../Global/CircularPhoto";

const chat = () => {
  return (
    <View style={styles.container}>
      <CircularPhoto size={70} />
      <View>
        <Text style={styles.name}>Will Knowles</Text>
        <Text>
          <Text style={styles.message}>Hey! How’s your dog?</Text>
          <Text style={styles.point}> · </Text>
          <Text style={styles.message}>1min</Text>
        </Text>
      </View>
      <StateChat />
    </View>
  );
};

export default chat;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  point: {
    ontSize: 17,
    color: Color.subtitle,
  },
  message: {
    fontSize: 17,
    color: Color.subtitle,
  },
});
