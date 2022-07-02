import React, { useState, useEffect } from "react";
import { ordersAPI } from "../../api/api";
import { CartType } from "../../types/cartType";
import Card from "../CardList/Card/Card";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState<CartType[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      const data = await ordersAPI.getOrders();
      setOrders(data.map((item) => item.items).flat());
    };
    getOrders();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {orders.map((item) => (
          <OrderItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
