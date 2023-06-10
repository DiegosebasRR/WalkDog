import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React from "react";
import Button from "../components/Global/Button";
import TitleViewAll from "../components/Home/TitleViewAll";
import Title from "../components/Global/Title";
import Card from "../components/Home/Card";
import useHomeViewModel from "../viewModels/useHomeController";
import { Color } from "../utils/Colors";
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
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 16,
    backgroundColor: Color.background,
    gap: 10,
  },

  subtitle: {
    color: Color.subtitle,
    fontSize: 17,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 10,
  },
});
