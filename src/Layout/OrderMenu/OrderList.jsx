import React from "react";
import { NewOrderList } from "./OrderListComposition";
import MobileDishCard from "../../components/Card/MobileDishCard";
import DishCard from "../../components/Card/DishCard";

function OrderList() {
  return (
    <>
      <NewOrderList Component={MobileDishCard} />
    </>
  );
}

export default OrderList;
