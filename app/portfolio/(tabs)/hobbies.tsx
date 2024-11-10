import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { likes } from "../../../data/likes";
import { COLOR } from "../../../styles/colors";

const hobbies = () => {
  return (
    <View style={styles.container}>
      <View style={styles.likecontainer}>
        <ScrollView>
          {likes.map((like) => (
            <Text style={styles.like}>{like}</Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default hobbies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.primary_DARK,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  likecontainer: {
    height: "80%",
    marginTop: 20,
    borderWidth: 2,
    borderColor: COLOR.secondary_DARK,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 10,
  },
  like: {
    borderColor: COLOR.secondary_DARK,
    borderWidth: 2,
    borderStyle: "solid",
    padding: 20,
    color: COLOR.title_DARK,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: COLOR.primary_DARK,
    width: 300,
  },
});
