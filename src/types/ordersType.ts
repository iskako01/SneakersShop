import { CartType } from "./cartType";

export type OrdersType = {
  id: string | number | null;
  items: Array<CartType>;
};
