import { StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="welcome-page"
          options={{
            drawerLabel: "Home",
            title: "¡Bienvenido!",
          }}
        />
        <Drawer.Screen
          name="shop-page"
          options={{
            drawerLabel: "Shop",
            title: "Factos sobre perracos",
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "Perfil personal",
            title: "Perfil",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;

const styles = StyleSheet.create({});
