import React from "react";
import { NewOrderList } from "./OrderListComposition";
import MobileDishCard from "../../components/Card/MobileDishCard";
import DishCard from "../../components/Card/DishCard";
import { Show, Flex, Container } from "@chakra-ui/react";
import SubHeading from "../../components/Other/SubHeading";

function OrderList() {
  return (
    <main>
      <Show breakpoint="(min-width: 1049px)">
        <SubHeading />
      </Show>

      <Show breakpoint="(max-width: 1048px)">
        <NewOrderList Component={MobileDishCard} />
      </Show>
      <Container maxW="container.xs">
        <Show breakpoint="(min-width: 1049px)">
          <Flex gap={10} justify="center">
            <NewOrderList Component={DishCard} />
          </Flex>
        </Show>
      </Container>
    </main>
  );
}

export default OrderList;
