import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import React from "react";
import Card from "../../../components/Card";
import { COLOR } from "../../../styles/colors";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Card />
      </View>
      <Tabs>
        <Tabs.Screen name="hobbies" options={{ headerShown: false }} />
        <Tabs.Screen name="repository" options={{ headerShown: false }} />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary_DARK,
  },
});
