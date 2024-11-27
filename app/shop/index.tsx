import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { products } from "../../data/productsList";
import Product from "../../components/Product";
import { COLOR } from "../../styles/colors";
import { ProductClass } from "../../model/Product";

const listSHop = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const [productList, setProductList] = useState<ProductClass[]>(products);

  const totalPrice = () => {
    let total = 0;
    productList.map((product) => {
      if (product.onCart) {
        const price = product.quantity * product.price;

        total += price;
      }
    });
    return total;
  };

  return (
    <View style={styles.container_main}>
      <Text style={styles.title}>LISTA DE COMPRA</Text>

      <Modal transparent={true} animationType="slide" visible={showModal}>
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            height: "100%",
          }}
        >
          <Text>Hola</Text>
          <Pressable
            style={styles.add}
            onPress={() => {
              handleModal();
            }}
          >
            <Text style={styles.text_add}>Añadir...</Text>
          </Pressable>
        </View>
      </Modal>

      <View style={styles.container}>
        <FlatList
          data={productList}
          renderItem={({ item }) => (
            <Product
              productProp={item}
              productList={productList}
              setProductList={setProductList}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text style={styles.price_letter}>Precio total: {totalPrice()}€</Text>
      <Pressable
        style={styles.add}
        onPress={() => {
          handleModal();
        }}
      >
        <Text style={styles.text_add}>Añadir...</Text>
      </Pressable>
    </View>
  );
};

export default listSHop;

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
});
