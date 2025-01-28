import { Slot, Stack } from "expo-router";
import Header from "../components/Header";
import React from "react";
import ThemeProvider from "../provider/ThemeProvider";
import UserTokenProvider from "../provider/UserTokenProvider";

const StackLayout = () => {
  return (
    <>
      <UserTokenProvider>
        <ThemeProvider>
          <Header />
          <Slot />
        </ThemeProvider>
      </UserTokenProvider>
    </>
  );
};

export default StackLayout;
