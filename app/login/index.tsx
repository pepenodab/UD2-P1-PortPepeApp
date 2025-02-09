import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { COLOR } from "../../styles/colors";
import "react-native-get-random-values";
import { loginUser, registerUser } from "../../service/api";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { asyncStorageService } from "../../service/async-store-service";

const login = () => {
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    email: "",
    pswd: "",
  });

  const handleLogin = async () => {
    try {
      const response = await loginUser(userInfo.email, userInfo.pswd);
      console.log("response", response);
      await asyncStorageService.save(
        asyncStorageService.KEYS.userToken,
        response.object.token
      );

      Alert.alert("Inicio de sesion exitoso");
      router.push("(drawer)/welcome-page");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "La contraseña o el email no coinciden");
    }
  };

  return (
    <View style={styles.container_main}>
      <Text style={styles.title}>Logeate</Text>
      <Modal transparent={true} animationType="slide" visible={true}>
        <View style={styles.modal_container}>
          <View style={styles.form_container}>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Email: </Text>
              <TextInput
                placeholder="Email..."
                style={styles.input_form}
                value={userInfo.email}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, email: text })
                }
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Contraseña: </Text>
              <TextInput
                placeholder="Contraseña..."
                style={styles.input_form}
                value={userInfo.pswd}
                onChangeText={(text) =>
                  setUserInfo({ ...userInfo, pswd: text })
                }
                secureTextEntry
              />
            </View>

            <Pressable
              style={styles.add}
              onPress={() => {
                handleLogin();
              }}
            >
              <Text style={styles.text_add}>Iniciar sesion...</Text>
            </Pressable>
            <Pressable
              style={styles.add}
              onPress={() => {
                router.push("register");
              }}
            >
              <Text style={styles.text_add}>Registrar...</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 3,
    borderRadius: 60,
    justifyContent: "center",
    width: "95%",
    height: "60%",
    alignItems: "center",
    paddingInline: 2,
    paddingTop: 40,
    paddingBottom: 40,
  },
  container_main: {
    backgroundColor: COLOR.primary_LIGHT,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 33,
    fontWeight: "bold",
    color: COLOR.secondarytitle_LIGHT,
    borderBottomWidth: 2,
    borderColor: COLOR.secondary_LIGHT,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
  price_letter: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 25,
    color: COLOR.secondary_LIGHT,
    fontWeight: "bold",
  },
  add: {
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: COLOR.secondary_LIGHT,
    borderColor: COLOR.secondary_LIGHT,
    width: 130,
    height: 40,
  },
  text_add: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 6,
  },
  modal_container: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: "100%",
  },
  form_container: {
    backgroundColor: COLOR.primary_LIGHT,
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: "45.5%",
    height: "60%",
    width: "95%",
    marginLeft: "3%",
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 5,
    borderRadius: 50,
  },
  input_form: {
    backgroundColor: COLOR.secondary_LIGHT,
    color: "white",
    width: 150,
    height: 50,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  form_row: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  letter_form: {
    fontSize: 16,
    color: COLOR.secondarytitle_LIGHT,
  },
  letter_form2: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
  exit: {
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: "red",
    borderColor: "red",
    width: 130,
    height: 40,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
