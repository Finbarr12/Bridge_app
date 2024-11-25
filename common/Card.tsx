import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface Card {
  image: any;
  text: string;
  bgcolor?: string;
  bdcolor?: string;
}

export const Card: React.FC<Card> = ({ image, text, bgcolor, bdcolor }) => {
  return (
    <View
      style={[
        styles.cardContainer,
        { backgroundColor: bgcolor, borderColor: bdcolor },
      ]}
    >
      <Image source={image} />
      <Text
        style={{
          fontSize: 20,
          width: 100,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "48%",
    height: 200,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
