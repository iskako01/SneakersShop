import axios from "axios";
import { SneakerType } from "./../types/sneakerType";
import { CartType } from "../types/cartType";
import { OrdersType } from "../types/ordersType";

const instance = axios.create({
  baseURL: "https://60d62397943aa60017768e77.mockapi.io/",
});

export const cartAPI = {
  getcart() {
    instance.get<Array<CartType>>("cart");
  },
};
export const sneakersAPI = {
  getSneakers() {
    instance.get<Array<SneakerType>>("items");
  },
};
export const favoritesAPI = {
  getFavorites() {
    instance.get("favorites");
  },
};
export const ordersAPI = {
  getOrders() {
    instance.get<Array<OrdersType>>("orders");
  },
};
