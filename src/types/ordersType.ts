import { CartType } from "./cartType";

export type OrdersType = {
  id: string;
  items: Array<CartType>;
};
