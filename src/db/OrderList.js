import greekSalad from "../assets/images/greek salad.jpg";
import bruschetta from "../assets/images/bruchetta.svg";
import lemonDessert from "../assets/images/lemon dessert.jpg";

const orderList = [
  {
    title: "Greek Salad",
    summary:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "$12.99",
    image: greekSalad,
  },
  {
    title: "Bruschetta",
    summary:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.",
    price: "$7.99",
    image: bruschetta,
  },
  {
    title: "Lemon Dessert",
    summary:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    price: "$5.00",
    image: lemonDessert,
  },
];

export default orderList;
