import { Tabs } from "expo-router";
import { View, StyleSheet } from "react-native";
import React from "react";
import Card from "../../../components/Card";
import { COLOR } from "../../../styles/colors";
import Entypo from "@expo/vector-icons/Entypo";

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Card />
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "blue",
        }}
      >
        <Tabs.Screen
          name="hobbies"
          options={{
            headerShown: false,
            title: "Hobbies",
            tabBarIcon: () => (
              <Entypo name="thumbs-up" style={{ fontSize: 20 }} />
            ),
          }}
        />
        <Tabs.Screen
          name="repository"
          options={{
            headerShown: false,
            title: "GitHub",
            tabBarIcon: () => <Entypo name="github" style={{ fontSize: 20 }} />,
          }}
        />
      </Tabs>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary_DARK,
  },
});
