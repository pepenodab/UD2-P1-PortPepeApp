import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "expo-router";
import { COLOR } from "../../styles/colors";

const index = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <View style={isDark ? styles.container_dark : styles.container}>
      <View style={styles.body}>
        <Image
          style={isDark ? styles.image_dark : styles.image}
          source={require("../../assets/logo.jpg")}
        />
        <View style={isDark ? styles.box_dark : styles.box}>
          <Text style={isDark ? styles.text_title_dark : styles.text_title}>
            WELCOME!
          </Text>
          <Text
            style={
              isDark ? styles.text_description_dark : styles.text_description
            }
          >
            Hi, you are using my portfolio app. Here you can find my hobbies and
            my repository.
          </Text>
          <Link href="/portfolio" style={{ marginTop: 50 }}>
            <View style={isDark ? styles.button_dark : styles.button}>
              <Text
                style={
                  isDark ? styles.button_letter_dark : styles.button_letter
                }
              >
                {" "}
                GO!
              </Text>
            </View>
          </Link>
          <Link href="/shop" style={{ marginTop: 20 }}>
            <View style={isDark ? styles.button_dark : styles.button}>
              <Text
                style={
                  isDark ? styles.button_letter_dark : styles.button_letter
                }
              >
                {" "}
                BUY!
              </Text>
            </View>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: COLOR.primary_LIGHT,
  },
  container_dark: {
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
    backgroundColor: COLOR.primary_LIGHT,
    borderColor: COLOR.secondary_LIGHT,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  box_dark: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    borderWidth: 5,
    marginTop: 100,
    height: 450,
    width: 300,
    backgroundColor: COLOR.primary_DARK,
    borderColor: COLOR.secondary_DARK,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  button: {
    backgroundColor: COLOR.secondary_LIGHT,
    borderWidth: 2,
    borderColor: COLOR.title_LIGHT,
    marginTop: 100,
    borderRadius: 10,
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  button_dark: {
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
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 5,
  },
  image_dark: {
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
    color: COLOR.title_LIGHT,
    fontSize: 30,
    fontWeight: "bold",
  },
  text_description: {
    color: COLOR.title_LIGHT,
    fontSize: 25,
    textAlign: "center",
  },
  text_title_dark: {
    color: COLOR.title_DARK,
    fontSize: 30,
    fontWeight: "bold",
  },
  text_description_dark: {
    color: COLOR.title_DARK,
    fontSize: 25,
    textAlign: "center",
  },
  button_letter: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  button_letter_dark: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
