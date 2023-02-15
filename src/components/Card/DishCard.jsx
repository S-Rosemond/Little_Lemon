import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Flex,
} from "@chakra-ui/react";

function DishCard({
  heading,
  price,
  summary,
  image,
  altText,
  footerText = "Order a delivery",
}) {
  return (
    <Card variant="filled" maxW="sm" overflow="hidden">
      <Image src={image} alt={altText} />
      <CardHeader>
        <Flex align="center" justify="space-between">
          <Heading fontSize="1.5rem">{heading}</Heading>
          <Text fontSize="1.3375rem" color="brandPeach.500">
            {price}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text color="brandGray.700" fontSize="1.3375rem">
          {summary}
        </Text>
      </CardBody>
      <CardFooter color="gray.800" fontSize="1.25rem">
        {footerText}
      </CardFooter>
    </Card>
  );
}

export default DishCard;
