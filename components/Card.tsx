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
        style={isDark ? styles.description_card_dark : styles.description_card}
      >
        <Text
          style={
            isDark ? styles.description_title_DARK : styles.description_title
          }
        >
          Descripción sobre mí!
        </Text>
        <Text
          style={
            isDark ? styles.description_text_DARK : styles.description_text
          }
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
  description_card: {
    margin: 10,
    backgroundColor: COLOR.primary_LIGHT,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR.secondary_LIGHT,
  },
  description_card_dark: {
    margin: 10,
    backgroundColor: COLOR.primary_DARK,
    padding: 10,
    borderRadius: 10,
    width: "75%",
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
  },
  description_title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description_title_DARK: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description_text: {
    color: "black",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
  description_text_DARK: {
    color: "#DDD",
    fontSize: 16,
    lineHeight: 22,
    textAlign: "center",
  },
});
