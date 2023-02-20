import {
  Card,
  Avatar,
  Flex,
  Text,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Grid,
} from "@chakra-ui/react";
import christina from "../../assets/avatar/christina.jpg";
import ian from "../../assets/avatar/ian.jpg";
import joseph from "../../assets/avatar/joseph.jpg";
import michael from "../../assets/avatar/michael.jpg";

function Testimonials() {
  const array = [
    {
      img: christina,
      rating: "5/5",
      email: "christina@gmail.com",
      name: "christina",
    },
    { img: ian, rating: "4/5", email: "ian@gmail.com", name: "ian" },
    { img: joseph, rating: "4/5", email: "joseph@gmail.com", name: "joseph" },
    {
      img: michael,
      rating: "4/5",
      email: "michael@gmail.com",
      name: "michael",
    },
  ];
  return (
    <>
      <Grid
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        justifyItems="center"
        align="center"
        gap={10}
        my={20}
      >
        <CreateTestimonials array={array} />
      </Grid>
    </>
  );
}

function CreateTestimonials({ array }) {
  return array.map((el, idx) => {
    const { img, rating, email, name } = el;
    return (
      <Card key={idx} w={[300, 300, 500]} maxW={500} shadow="dark-lg">
        <CardHeader>
          <Flex justify="center">
            <Text>{rating} Great food</Text>
          </Flex>
        </CardHeader>
        <Flex justify="center">
          <Avatar size="xl" src={img} />
        </Flex>

        <CardBody>
          <Stack justify="center" align="center">
            <Heading>{name}</Heading>
            <Text>{email}</Text>
          </Stack>
        </CardBody>
      </Card>
    );
  });
}

export default Testimonials;
