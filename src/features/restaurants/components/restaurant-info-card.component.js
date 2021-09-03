import React from "react";
import { Image, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ],
    address = "100 some random street address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover
        key={name}
        style={styles.cover}
        source={{
          uri: photos[0],
        }}
      />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
