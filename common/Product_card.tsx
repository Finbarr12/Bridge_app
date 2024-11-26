import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "../interface/interfaces";
// import FastImage from "react-native-fast-image";

export const Product_Card: React.FC<Card> = ({
  image,
  text,
  desc,
  price,
  bdcolor,
}) => {
  return (
    <View style={[styles.cardContainer, { borderColor: bdcolor }]}>
      <View style={{ width: 50, height: 50, backgroundColor: "red" }}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: 150,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {text}
      </Text>
      <Text
        style={{
          fontSize: 13,
          width: 140,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        {desc}
      </Text>
      <View
        style={{
          width: "100%",
          //   backgroundColor: "red",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 19,
            // width: 140,
            textAlign: "center",
            marginTop: 10,
            marginLeft: 10,
            color: "#ff7716",
          }}
        >
          # {price}
        </Text>
      </View>
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
    marginBottom: 20,
  },

  image: {
    width: 50,
    height: 50,
    objectFit: "fill",
  },
});
