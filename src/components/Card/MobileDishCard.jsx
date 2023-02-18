import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Flex,
  Spacer,
  Show,
} from "@chakra-ui/react";

function MobileDishCard({
  title,
  price,
  summary,
  image,
  altText = "",
  onClick,
}) {
  return (
    <Card
      onClick={onClick}
      direction="row-reverse"
      overflow="hidden"
      variant="outline"
      justify="start"
      gap="50px"
      px={5}
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
      <Show breakpoint="(min-width: 580px)">
        <Spacer />
      </Show>

      <Stack align="start" maxW="sm">
        <CardBody>
          <Heading fontSize="1.5rem" size="md" fontFamily="karla">
            {title}
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
          <Text
            fontSize="1.125rem"
            py="2"
            color="brandGray.800"
            onClick={onClick}
          >
            {price}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default MobileDishCard;
