import axios from "axios";
import { SneakerType } from "./../types/sneakerType";
import { CartType } from "../types/cartType";
import { OrdersType } from "../types/ordersType";

const instance = axios.create({
  baseURL: "https://60d62397943aa60017768e77.mockapi.io/",
});

export const cartAPI = {
  getcart() {
    return instance
      .get<Array<CartType>>("cart")
      .then((response) => response.data);
  },
  addTocart(item: CartType) {
    return instance.post("cart", item);
  },
};

export const sneakersAPI = {
  getSneakers() {
    return instance
      .get<Array<SneakerType>>("items")
      .then((response) => response.data);
  },
};

export const favoritesAPI = {
  getFavorites() {
    return instance.get("favorites").then((response) => response.data);
  },
};

export const ordersAPI = {
  getOrders() {
    return instance
      .get<Array<OrdersType>>("orders")
      .then((response) => response.data);
  },
};
