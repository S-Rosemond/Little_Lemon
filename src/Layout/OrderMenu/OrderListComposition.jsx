import React from "react";
import orderList from "../../db/OrderList";

// Next time use Blur hash for images; due tomorrow

function GenericOrderListParent({ children, onClick }) {
  const MobileList = React.Children.map(children, () => {
    return React.cloneElement(children, { onClick });
  });
  return <>{MobileList}</>;
}

export function CreateOrderList({ onClick, Component }) {
  return (
    <>
      {orderList.map((el) => (
        <Component key={el.title} {...el} onClick={onClick} />
      ))}
    </>
  );
}

export function NewOrderList({ Component }) {
  const handleChange = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <GenericOrderListParent onClick={handleChange}>
      <CreateOrderList Component={Component} />
    </GenericOrderListParent>
  );
}

export default GenericOrderListParent;
