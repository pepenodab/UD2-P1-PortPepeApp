import uuid from "react-native-uuid";
import "react-native-get-random-values";

export class ProductClass {
  id: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
  onCart: boolean;

  constructor(
    name: string,
    category: string,
    quantity: number,
    price: number,
    onCart: boolean
  ) {
    this.id = uuid.v4();
    this.name = name;
    this.category = category;
    this.quantity = quantity;
    this.price = price;
    this.onCart = onCart;
  }
}
