import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import { likes } from "../../../data/likes";
import { COLOR } from "../../../styles/colors";
import { ThemeContext } from "../../../context/ThemeContext";

const hobbies = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <View style={isDark ? styles.container_dark : styles.container}>
      <View style={isDark ? styles.like_container_dark : styles.like_container}>
        <ScrollView>
          {likes.map((like) => (
            <Text style={isDark ? styles.like_dark : styles.like}>{like}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default hobbies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary_LIGHT,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  container_dark: {
    backgroundColor: COLOR.primary_DARK,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  like_container: {
    height: "80%",
    marginTop: 20,
    borderWidth: 2,
    borderColor: COLOR.secondary_LIGHT,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  like_container_dark: {
    height: "80%",
    marginTop: 20,
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  like: {
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: COLOR.title_LIGHT,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLOR.primary_LIGHT,
    width: 300,
  },
  like_dark: {
    borderColor: COLOR.secondary_DARK,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: COLOR.title_DARK,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLOR.primary_DARK,
    width: 300,
  },
});
