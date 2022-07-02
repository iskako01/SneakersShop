import { CartType } from "./cartType";

export type OrdersType = {
  id: string | number ;
  items: Array<CartType>;
};
