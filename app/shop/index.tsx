import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { products } from "../../data/productsList";
import Product from "../../components/Product";
import { COLOR } from "../../styles/colors";
import { ProductClass } from "../../model/Product";
import RNPickerSelect from "react-native-picker-select";
import uuid from "react-native-uuid";
import "react-native-get-random-values";

const listSHop = () => {
  const [notFull, setNotFull] = useState(true);

  const [newProduct, setNewProduct] = useState<ProductClass>({
    id: uuid.v4(),
    name: "",
    category: "",
    quantity: 0,
    price: 0,
    onCart: true,
  });

  const handleAdd = () => {
    if (newProduct.name.trim().length == 0) {
      setNotFull(true);
      alert("No se puede añadir objetos con campos vacios");
      return;
    }
    if (newProduct.category.trim().length == 0 || newProduct.category == null) {
      setNotFull(true);
      alert("No se puede añadir objetos con campos vacios");
      return;
    }
    if (newProduct.quantity == 0) {
      setNotFull(true);
      alert("No se puede añadir objetos con campos vacios");
      return;
    }
    if (newProduct.price == 0) {
      setNotFull(true);
      alert("No se puede añadir objetos con campos vacios");
      return;
    }

    const productToAdd = { ...newProduct };

    setProductList([...productList, productToAdd]);

    setNewProduct({
      id: uuid.v4(),
      name: "",
      category: "",
      quantity: 0,
      price: 0,
      onCart: true,
    });
  };

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
        <View style={styles.modal_container}>
          <View style={styles.form_container}>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Nombre: </Text>
              <TextInput
                placeholder="Nombre..."
                style={styles.input_form}
                value={newProduct.name}
                onChangeText={(text) =>
                  setNewProduct({ ...newProduct, name: text })
                }
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Categoría:</Text>
              <RNPickerSelect
                placeholder={{ label: "Selecciona una categoría", value: null }}
                style={{ inputAndroid: { ...styles.input_form } }}
                value={newProduct.category}
                onValueChange={(value) =>
                  setNewProduct({ ...newProduct, category: value })
                }
                items={[
                  { label: "Panederia", value: "bakery" },
                  { label: "Enlatado", value: "canned" },
                  { label: "Bebida", value: "drink" },
                  { label: "Pescado", value: "fish" },
                  { label: "Fruta o vegetal", value: "fruitveggie" },
                  { label: "Carne", value: "meat" },
                  { label: "Otro...", value: "other" },
                ]}
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Cantidad: </Text>
              <TextInput
                placeholder="Cantidad..."
                style={styles.input_form}
                keyboardType="numeric"
                value={newProduct.quantity.toString()}
                onChangeText={(quantity) =>
                  setNewProduct({ ...newProduct, quantity: parseInt(quantity) })
                }
              />
            </View>
            <View style={styles.form_row}>
              <Text style={styles.letter_form}>Precio u/:</Text>
              <TextInput
                placeholder="Precio u/..."
                style={styles.input_form}
                keyboardType="numeric"
                value={
                  newProduct.price === 0 ? "" : newProduct.price.toString()
                }
                onChangeText={(price) =>
                  setNewProduct({ ...newProduct, price: parseFloat(price) })
                }
              />
            </View>
            <Pressable
              style={styles.add}
              onPress={() => {
                handleAdd();
                handleModal();
              }}
            >
              <Text style={styles.text_add}>Añadir...</Text>
            </Pressable>
            <Pressable
              style={styles.exit}
              onPress={() => {
                handleModal();
              }}
            >
              <Text style={styles.text_add}>Cancelar</Text>
            </Pressable>
          </View>
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
  exit: {
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: "red",
    borderColor: "red",
    width: 130,
    height: 40,
  },
});
