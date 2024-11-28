import { ProductClass } from "../model/Product";
import uuid from "react-native-uuid";
import "react-native-get-random-values";

export const products: ProductClass[] = [
  {
    id: uuid.v4(),
    name: "Dulce de leche",
    category: "bakery",
    quantity: 1,
    price: 2,
    onCart: false,
  },
  {
    id: uuid.v4(),
    name: "Nectar",
    category: "drink",
    quantity: 1,
    price: 2,
    onCart: true,
  },
  {
    id: uuid.v4(),
    name: "Churra",
    category: "fish",
    quantity: 1,
    price: 2,
    onCart: false,
  },
];
