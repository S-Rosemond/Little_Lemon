import { Card, Image } from "@chakra-ui/react";

function CardImage({ src }) {
  return (
    <>
      <Card
        boxShadow="dark-lg"
        variant="elevated"
        minWidth="200px"
        borderRadius={16}
      >
        <Image src={src} borderRadius={16} />
      </Card>
    </>
  );
}

export default CardImage;
