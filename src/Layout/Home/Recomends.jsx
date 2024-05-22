import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import SectionHeader from "../../component/SectionHeader";
const Recomends = () => {
  const card = (
    <>
      <Card maxW="425px" paddingBottom={'15px'}>
        <CardBody>
          <Image
            src="/home/slide1.jpg"
            alt="Green double couch with wooden legs"
            //   borderRadius="lg"
            width={"100%"}
            height={"350px"}
          />
          <Stack mt={"10px"} spacing="3">
            <Heading size="md" textAlign={"center"}>
              Living room Sofa
            </Heading>
            <Text textAlign={"center"}>
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </Text>
          </Stack>
        </CardBody>
        <div className="flex justify-center">
          <Button w={"fit-content"} borderBottom={"4px solid #BB8506"}>
            Add to Cart
          </Button>
        </div>
      </Card>
    </>
  );
  return (
    <div className="mt-24">
      <SectionHeader subTitle={"Should Try"} title={"CHEF RECOMMENDS"} />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {card}
        {card}
        {card}
      </div>
    </div>
  );
};

export default Recomends;
