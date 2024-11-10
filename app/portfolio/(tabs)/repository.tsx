import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import QRCode from "react-native-qrcode-svg";
import { COLOR } from "../../../styles/colors";
import { ThemeContext } from "../../../context/ThemeContext";

const repository = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <View style={isDark ? styles.bodyContainer_dark : styles.bodyContainer}>
      <Text style={isDark ? styles.title_dark : styles.title}>Repository:</Text>
      <View style={isDark ? styles.centerQRCode_dark : styles.centerQRCode}>
        <QRCode value="https://github.com/pepenodab" />
      </View>
    </View>
  );
};

export default repository;

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary_LIGHT,
    marginTop: -20,
  },
  bodyContainer_dark: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary_DARK,
    marginTop: -20,
  },
  centerQRCode: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.primary_LIGHT,
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 2,
    borderRadius: 20,
    width: "80%",
    height: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  centerQRCode_dark: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.primary_DARK,
    borderColor: COLOR.secondary_DARK,
    borderWidth: 2,
    borderRadius: 20,
    width: "80%",
    height: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  title: {
    fontSize: 25,
    color: COLOR.title_LIGHT,
    fontWeight: "bold",
  },
  title_dark: {
    fontSize: 25,
    color: COLOR.title_DARK,
    fontWeight: "bold",
  },
});
