import { Button, Text, View, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";

const TodoPage = () => {
  const [modalVisisble, setModalVisisble] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Button
        title="Abrir modal"
        onPress={() => setModalVisisble(!modalVisisble)}
      ></Button>
      <Modal visible={modalVisisble} transparent={true}>
        <View style={styles.modalContainer}>
          <Text> Hola</Text>
          <Button
            title="Cerrar modal"
            onPress={() => setModalVisisble(!modalVisisble)}
          ></Button>
        </View>
      </Modal>
    </View>
  );
};
export default TodoPage;

const styles = StyleSheet.create({
  container: {
    width: "50%",
    flex: 1,
    justifyContent: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: "auto",
    verticalAlign: "auto",
    backgroundColor: "purple",
    width: "50%",
    height: "50%",
  },
});
