import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
} from "@chakra-ui/react";

function MobileDishCard({ heading, price, summary, image, altText = "" }) {
  return (
    <Card
      direction="row-reverse"
      overflow="hidden"
      variant="outline"
      justify="start"
      gap="50px"
    >
      <Flex align="center">
        <Image
          objectFit="cover"
          maxW={{ base: "200px" }}
          maxH="95px"
          src={image}
          alt={altText}
        />
      </Flex>

      <Stack align="start" maxW="sm">
        <CardBody>
          <Heading fontSize="1.5rem" size="md">
            {heading}
          </Heading>
          <Text
            textOverflow="ellipsis"
            overflow="hidden"
            color="gray.600"
            py="2"
            fontSize="1.25rem"
          >
            {summary}
          </Text>
          <Text fontSize="1.125rem" py="2" color="brandGray.800">
            {price}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MobileDishCard;
