import React from "react";
import { NewOrderList } from "./OrderListComposition";
import MobileDishCard from "../../components/Card/MobileDishCard";
import DishCard from "../../components/Card/DishCard";
import { Show, HStack, Flex, Container, Grid } from "@chakra-ui/react";
import SubHeading from "../../components/Other/SubHeading";

function OrderList() {
  return (
    <>
      <SubHeading />
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
    </>
  );
}

export default OrderList;

{
  /* <Container maxW="container.xs">
<Show breakpoint="(min-width: 1049px)">
  <Grid gap={10} justify="center" templateColumns="repeat(3, 1fr)">
    <NewOrderList Component={DishCard} />
  </Grid>
</Show>
</Container> */
}
