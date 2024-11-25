import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import QRCode from "react-native-qrcode-svg";
import { COLOR } from "../../styles/colors";
import { ThemeContext } from "../../context/ThemeContext";

const repository = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <View style={isDark ? styles.body_container_dark : styles.body_container}>
      <Text style={isDark ? styles.title_dark : styles.title}>Repository:</Text>
      <View style={isDark ? styles.center_qr_code_dark : styles.center_qr_code}>
        <QRCode value="https://github.com/pepenodab" />
      </View>
    </View>
  );
};

export default repository;

const styles = StyleSheet.create({
  body_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary_LIGHT,
    marginTop: -20,
  },
  body_container_dark: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLOR.primary_DARK,
    marginTop: -20,
  },
  center_qr_code: {
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
  center_qr_code_dark: {
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
