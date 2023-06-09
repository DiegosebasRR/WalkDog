import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Button from "./Button";
const Card = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/paseador.png")} />
      <View>
        <View>
          <Text style={styles.title}>Mason York</Text>
          <Text>
            <Image
              style={styles.icon}
              source={require("../assets/location.png")}
            />
            <Text style={styles.subtitle}>7 km from you</Text>
          </Text>
        </View>
        <Button title="$3/h" />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 190,
    margin: 5,
  },
  image: {
    width: 199,
    height: 136,
    borderRadius: 14,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    fontSize: 12,
    color: "#A1A1A1",
  },
  icon: {
    width: 16,
    height: 16,
  },
});
