import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Button,
  Pressable,
} from "react-native";
import { COLOR } from "../styles/colors";
import { ThemeContext } from "../context/ThemeContext";
import { asyncStorageService } from "../service/async-store-service";
import { useRouter } from "expo-router";

const Header = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const router = useRouter();
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    theme.handleDark();
  };
  const theme = useContext(ThemeContext);
  const handleLogout = async () => {
    await asyncStorageService.remove(asyncStorageService.KEYS.userToken);
    router.push("login");
  };

  return (
    <View style={theme.isDark ? styles.container_dark : styles.container}>
      <Text style={theme.isDark ? styles.text_dark : styles.text}>
        PortPepeApp
      </Text>

      <Switch
        trackColor={{ true: COLOR.secondary_LIGHT, false: COLOR.title_DARK }}
        thumbColor={theme.isDark ? COLOR.primary_LIGHT : COLOR.secondary_DARK}
        onValueChange={toggleSwitch}
        value={theme.isDark}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          handleLogout();
        }}
      >
        <Text>LogOut</Text>
      </Pressable>
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
    backgroundColor: COLOR.secondary_LIGHT,
  },
  container_dark: {
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
    color: COLOR.title_LIGHT,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  text_dark: {
    color: COLOR.title_DARK,
    textAlign: "center",
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "red",
    color: "white",
    padding: 5,
  },
});

export default Header;
