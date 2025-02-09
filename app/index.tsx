import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { asyncStorageService } from "../service/async-store-service";
import UserTokenProvider from "../provider/UserTokenProvider";
import { UserTokenContext } from "../context/UserTokenContext";

const StartPage = () => {
  const [token, setToken] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await asyncStorageService.get<string>(
        asyncStorageService.KEYS.userToken
      );
      setToken(!!storedToken);
    };

    checkToken();
  }, []);

  if (token === null) {
    return null;
  }

  return token ? (
    <Redirect href="/(drawer)/welcome-page" />
  ) : (
    <Redirect href="/login" />
  );
};

export default StartPage;
const styles = StyleSheet.create({});
