import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";

function MobileDishCard({ heading, price, summary, image }) {
  return (
    <Card direction="row-reverse" overflow="hidden" variant="outline">
      <Image
        objectFit="cover"
        maxW={{ base: "100px" }}
        maxH="100px"
        src={image}
        alt="Caffe Latte"
      />
      <Stack justify="start" maxW="sm">
        <CardBody>
          <Heading fontSize="1.5rem" size="md">
            {heading}
          </Heading>
          <Text
            textOverflow="ellipsis"
            overflow="hidden"
            color="gray.700"
            fontSize="1.3375rem"
            py="2"
          >
            {summary}
          </Text>{" "}
          <Text py="2" color="brandGray.800" fontSize="1.3375rem">
            {price}
          </Text>
        </CardBody>

        <CardFooter></CardFooter>
      </Stack>
    </Card>
  );
}

export default MobileDishCard;
