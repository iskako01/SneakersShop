import React, { useEffect, useState } from "react";
import { SneakerType } from "../../types/sneakerType";
import { sneakersAPI } from "../../api/api";
import { CartType } from "../../types/cartType";
import CardList from "./CardList";

type PropsType = {
  onAddToCart: (cartItem: CartType) => void;
};

const CardListConatainer: React.FC<PropsType> = ({ onAddToCart }) => {
  const [items, setIems] = useState<Array<SneakerType>>([]);

  const getSneakers = async () => {
    const data = await sneakersAPI.getSneakers();
    setIems(data);
  };

  useEffect(() => {
    getSneakers();
  }, []);

  return <CardList onAddToCart={onAddToCart} items={items} />;
};

export default CardListConatainer;
