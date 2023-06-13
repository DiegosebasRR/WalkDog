import { Image, View } from "react-native";
import React, { FunctionComponent } from "react";

const CircularPhoto: FunctionComponent<Props> = ({ size }) => {
  return (
    <View>
      <Image
        style={{ width: size, height: size, borderRadius: size }}
        source={require("../../assets/profile.png")}
      />
    </View>
  );
};

interface Props {
  size: number;
}

export default CircularPhoto;
