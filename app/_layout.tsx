import { Slot, Stack } from "expo-router";
import Header from "../components/Header";
import React from "react";
import ThemeProvider from "../provider/ThemeProvider";

const StackLayout = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Slot />
      </ThemeProvider>
    </>
  );
};

export default StackLayout;
