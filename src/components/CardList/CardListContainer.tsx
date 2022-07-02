import React from "react";
import { SneakerType } from "../../types/sneakerType";
import { CartType } from "../../types/cartType";
import CardList from "./CardList";

type PropsType = {
  loading: boolean;
};

const CardListConatainer: React.FC<PropsType> = ({ loading }) => {
  return <CardList loading={loading} />;
};

export default CardListConatainer;
