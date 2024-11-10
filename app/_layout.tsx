import { Slot, Stack } from "expo-router";
import Header from "../components/Header";
import React from "react";
import { View, Text } from "react-native";

const StackLayout = () => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
};

export default StackLayout;
