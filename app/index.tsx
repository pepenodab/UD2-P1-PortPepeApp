import { StyleSheet } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const StartPage = () => {
  return <Redirect href={"/(drawer)/welcome-page"} />;
};

export default StartPage;

const styles = StyleSheet.create({});
