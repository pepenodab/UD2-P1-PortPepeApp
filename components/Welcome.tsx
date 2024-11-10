import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Header from "./Header";
import { COLOR } from "../styles/colors";
import { Link, useNavigation } from "expo-router";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View>
          <Image style={styles.image} source={require("../assets/logo.jpg")} />
        </View>
        <View style={styles.box}>
          <Text style={styles.text_title}>WELCOME!</Text>
          <Text style={styles.text_description}>
            Hi, you are using my portfolio app. Here you can find my hobbies and
            my repository.
          </Text>
          <View style={styles.button}>
            <Link href="./portfolio">GO!</Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLOR.primary_DARK,
  },
  body: {
    marginTop: 50,
    height: "85.5%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 5,
    marginTop: 100,
    height: 450,
    width: 300,
    borderColor: COLOR.secondary_DARK,
  },
  button: {
    backgroundColor: COLOR.secondary_DARK,
    borderWidth: 2,
    borderColor: COLOR.title_DARK,
    marginTop: 100,
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 20,
    position: "absolute",
    marginLeft: -90,
    top: -20,
    zIndex: 1,
    borderColor: COLOR.secondary_DARK,
    borderWidth: 5,
  },
  text_title: {
    color: COLOR.secondarytitle_DARK,
    fontSize: 30,
    fontWeight: "bold",
  },
  text_description: {
    color: COLOR.title_DARK,
    fontSize: 25,
    textAlign: "center",
  },
});
