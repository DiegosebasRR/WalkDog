import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import Button from "../components/Button";
import TitleViewAll from "../components/TitleViewAll";
import Title from "../components/Title";
import Card from "../components/Card";
import useHomeViewModel from "../viewModels/useHomeController";
const HomeScreen = () => {
  const { card } = useHomeViewModel();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Title title="Home" />
        <Text style={styles.subtitle}>Explore dong</Text>
        <View style={styles.buttonContainer}>
          <Button title="+ Ser Paseador" />
          <Button title="+ add dog" />
        </View>
        <TitleViewAll title="Paseadores" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={card}
          horizontal={true}
          renderItem={(item) => <Card />}
        />
        <TitleViewAll title="Perros" />
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={card}
          horizontal={true}
          renderItem={(item) => <Card />}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    gap: 10,
  },

  subtitle: {
    color: "#B0B0B0",
    fontSize: 17,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
});
