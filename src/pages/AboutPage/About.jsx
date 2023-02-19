import { Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import CardImage from "../../components/Card/CardImage";
import chefs from "../../assets/images/Mario and Adrian b.jpg";
import restaurant from "../../assets/images/restaurant.jpg";

function About() {
  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        gap={20}
        py={40}
        px={20}
      >
        <GridItem>
          <Heading color="brandGreen.600">Little Lemon Restaurant</Heading>
          <Text maxW="45ch">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quaerat iste quam labore veniam reiciendis, tempore reprehenderit ex
            aut, placeat aspernatur magnam omnis nesciunt? Animi sequi saepe
            numquam vero rem, harum accusamus corporis hic, eos architecto quia
            dolor eaque, quae temporibus quis a? Ipsa accusamus modi voluptate
            est quis optio!
          </Text>
        </GridItem>
        <GridItem>
          <CardImage src={restaurant} />
        </GridItem>

        <GridItem>
          <Heading color="brandGreen.600">Mario and Adrian</Heading>
          <Text maxW="45ch">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            quaerat iste quam labore veniam reiciendis, tempore reprehenderit ex
            aut, placeat aspernatur magnam omnis nesciunt? Animi sequi saepe
            numquam vero rem, harum accusamus corporis hic, eos architecto quia
            dolor eaque, quae temporibus quis a? Ipsa accusamus modi voluptate
            est quis optio!
          </Text>
        </GridItem>
        <GridItem>
          {/* <div className="about-image about-image__B" /> */}
          <CardImage src={chefs} />
        </GridItem>
      </Grid>
    </>
  );
}

export default About;
