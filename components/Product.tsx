import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import { categories } from "../data/categories";
import Entypo from "@expo/vector-icons/Entypo";
import { COLOR } from "../styles/colors";
import { ProductClass } from "../model/Product";

type ProductProp = {
  productProp: ProductClass;
  productList: ProductClass[];
  setProductList: Function;
  setNewProduct: Function;
  setEdit: Function;
};

const ProductCard = ({
  productProp,
  productList,
  setProductList,
  setEdit,
  setNewProduct,
}: ProductProp) => {
  const toggleOnCart = (id: string) => {
    setProductList((prevList: any[]) =>
      prevList.map((product: { id: string; onCart: any }) =>
        product.id === id ? { ...product, onCart: !product.onCart } : product
      )
    );
  };

  const toggleDelete = (id: string) => {
    setProductList((prevList: any[]) =>
      prevList.filter((product) => product.id !== id)
    );
  };

  function getCategorie(product: ProductClass): ImageSourcePropType {
    let src;
    for (let index = 0; index < categories.length; index++) {
      if (categories[index].categorie == product.category) {
        src = categories[index].src;
      }
    }
    return src;
  }

  return (
    <View style={styles.productCard}>
      <Image source={getCategorie(productProp)} style={styles.images} />
      <View style={styles.container}>
        <Text style={styles.title}> {productProp.name}</Text>
        <View style={styles.product_info}>
          <Text style={styles.info}> {productProp.category}</Text>
          <Text style={styles.info}> Unidad/es: {productProp.quantity}</Text>
        </View>
        <View style={styles.product_info}>
          <Text style={styles.price}> Precio u/: {productProp.price}€</Text>
          <Pressable
            style={styles.check}
            onPress={() => {
              toggleOnCart(productProp.id);
            }}
          >
            {productProp.onCart && (
              <Entypo name="check" style={{ color: "white" }} size={16} />
            )}
          </Pressable>
          <Pressable
            style={styles.delete}
            onPress={() => {
              toggleDelete(productProp.id);
            }}
          >
            <Entypo name="trash" style={styles.logo} size={13} />
          </Pressable>
        </View>
        <Pressable
          style={styles.edit}
          onPress={() => {
            setNewProduct(productProp);
            setEdit(true);
          }}
        >
          <Text>Editar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    flexDirection: "row",
    alignItems: "center",
    minWidth: "85%",
    height: 120,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: COLOR.secondary_LIGHT,
    marginBottom: 20,
  },
  container: {
    alignItems: "center",
    width: 200,
  },
  images: {
    width: 80,
    height: 80,
    borderColor: COLOR.secondary_LIGHT,
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 20,
  },
  title: {
    fontWeight: "bold",
    color: COLOR.secondarytitle_LIGHT,
    fontSize: 20,
  },
  product_info: {
    flexDirection: "row",
  },
  info: {
    color: COLOR.secondarytitle_LIGHT,
    fontSize: 15,
  },
  price: {
    color: COLOR.secondarytitle_LIGHT,
    marginLeft: -10,
  },
  check: {
    marginTop: 3,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: COLOR.secondarytitle_LIGHT,
    alignItems: "center",
    width: 20,
    height: 20,
    backgroundColor: COLOR.secondary_LIGHT,
  },
  delete: {
    marginTop: 3,
    borderWidth: 1,
    borderColor: COLOR.title_LIGHT,
    width: 20,
    height: 20,
    alignItems: "center",
    backgroundColor: "red",
  },
  logo: {
    alignItems: "center",
    marginTop: 2.5,
    color: "white",
  },
  edit: {
    marginTop: 5,
    backgroundColor: COLOR.secondary_LIGHT,
    width: "60%",
    alignContent: "center",
    alignItems: "center",
    color: "white",
  },
});
