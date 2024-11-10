import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLOR } from "../styles/colors";

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image source={require("../assets/avatar.jpg")} style={styles.avatar} />
      <View style={styles.descriptionCard}>
        <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
        <Text style={styles.descriptionText}>
          Soy un alumno de dam y me gusta mucho la programación, aunque mi
          ex-tutor no
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLOR.primary_DARK,
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
  },
  descriptionCard: {
    margin: 10,
    backgroundColor: COLOR.primary_DARK,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
  },
  descriptionTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    color: "#DDD",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});
