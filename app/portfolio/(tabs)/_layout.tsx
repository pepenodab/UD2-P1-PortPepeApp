import { Tabs } from "expo-router";
import Header from "../../../components/Header";
import React from "react";

export default () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="hobbies" />
        <Tabs.Screen name="repository" />
      </Tabs>
    </>
  );
};
