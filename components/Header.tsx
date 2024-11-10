import React, { useState } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { COLOR } from "../styles/colors";

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PortPepeApp</Text>
      <Switch
        trackColor={{ true: COLOR.secondary_LIGHT, false: COLOR.title_DARK }}
        thumbColor={isEnabled ? COLOR.primary_LIGHT : COLOR.secondary_LIGHT}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 150,
    marginTop: -20,
    paddingTop: 80,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLOR.secondary_DARK,
  },
  text: {
    color: COLOR.title_DARK,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
});

export default Header;
