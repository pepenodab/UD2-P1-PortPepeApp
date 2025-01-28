import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { asyncStorageService } from "../../service/async-store-service";

const DrawerLayout = () => {
  const router = useRouter();

  useEffect(() => {
    const checkToken = async () => {
      const token = await asyncStorageService.get<string>(
        asyncStorageService.KEYS.userToken
      );
      if (token != null) {
        router.push("login");
      }
    };
    checkToken();
  });

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
