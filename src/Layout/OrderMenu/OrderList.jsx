import React from "react";
import { NewOrderList } from "./OrderListComposition";
import MobileDishCard from "../../components/Card/MobileDishCard";
import DishCard from "../../components/Card/DishCard";
import { Show, HStack, Flex } from "@chakra-ui/react";

function OrderList() {
  return (
    <>
      <Show breakpoint="(max-width: 1048px)">
        <NewOrderList Component={MobileDishCard} />
      </Show>
      <Show breakpoint="(min-width: 1049px)">
        <Flex gap={10} justify="center">
          <NewOrderList Component={DishCard} />
        </Flex>
      </Show>
    </>
  );
}

export default OrderList;
