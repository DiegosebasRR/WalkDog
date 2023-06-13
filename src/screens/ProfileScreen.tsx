import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color } from "../utils/Colors";
import Title from "../components/Global/Title";
import ButtonIcon from "../components/Global/ButtonIcon";
import CircularPhoto from "../components/Global/CircularPhoto";
import { Feather } from "@expo/vector-icons";
import ButtonProfile from "../components/Profile/ButtonProfile";
const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <ButtonIcon iconName="settings" />
        <ButtonIcon iconName="notifications" />
      </View>
      <CircularPhoto size={200} />
      <Text style={styles.containerName}>
        <Title title="Cristian Downey " />
        <Feather name="edit" size={24} color="black" />
      </Text>
      <Text>
        <Image style={styles.icon} source={require("../assets/location.png")} />
        <Text style={styles.subtitle}>Moscow, Russia</Text>
      </Text>
      <View style={styles.containerButtonProfile}>
        <ButtonProfile />
        <ButtonProfile />
        <ButtonProfile />
        <ButtonProfile />
        <ButtonProfile />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: Color.background,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  containerButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
  },
  containerName: {
    textAlign: "center",
  },
  subtitle: {
    fontSize: 17,
    color: Color.subtitle,
  },
  icon: {
    width: 22,
    height: 22,
  },
  containerButtonProfile: {
    width: "100%",
    backgroundColor: Color.background2,
  },
});
