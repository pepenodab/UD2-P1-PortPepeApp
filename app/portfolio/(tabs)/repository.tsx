import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import { COLOR } from "../../../styles/colors";

const repository = () => {
  return (
    <View style={styles.bodyContainer}>
      <Text style={styles.title}>Repository:</Text>
      <View style={styles.centerQRCode}>
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
    backgroundColor: COLOR.primary_DARK,
    marginTop: -20,
  },
  centerQRCode: {
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
    color: COLOR.title_DARK,
    fontWeight: "bold",
  },
});
