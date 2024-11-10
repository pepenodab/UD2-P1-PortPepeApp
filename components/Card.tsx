import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { COLOR } from "../styles/colors";
import { ThemeContext } from "../context/ThemeContext";

const Card = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <View style={isDark ? styles.card_container_dark : styles.card_container}>
      <Image
        source={require("../assets/avatar.jpg")}
        style={isDark ? styles.avatar_dark : styles.avatar}
      />
      <View
        style={isDark ? styles.descriptionCard_dark : styles.descriptionCard}
      >
        <Text
          style={
            isDark ? styles.descriptionTitle_DARK : styles.descriptionTitle
          }
        >
          Descripción sobre mí!
        </Text>
        <Text
          style={isDark ? styles.descriptionText_DARK : styles.descriptionText}
        >
          Soy un alumno de dam y me gusta mucho la programación, aunque mi
          ex-tutor no
        </Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_container: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: COLOR.primary_LIGHT,
    borderRadius: 15,
    margin: 20,
    borderWidth: 2,
    borderColor: COLOR.secondary_LIGHT,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 10,
  },
  card_container_dark: {
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
    borderColor: COLOR.secondary_LIGHT,
  },
  avatar_dark: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
  },
  descriptionCard: {
    margin: 10,
    backgroundColor: COLOR.primary_LIGHT,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR.secondary_LIGHT,
  },
  descriptionCard_dark: {
    margin: 10,
    backgroundColor: COLOR.primary_DARK,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
  },
  descriptionTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionTitle_DARK: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descriptionText: {
    color: "black",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
  descriptionText_DARK: {
    color: "#DDD",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});
