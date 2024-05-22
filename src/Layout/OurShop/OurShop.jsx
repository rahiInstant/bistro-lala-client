import { useState } from "react";
import Banner from "./Banner";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const OurShop = () => {
  const TabStore = ["popular", "salad", "drinks", "dessert", "pizza", "soup"];
  const category = useParams();
  const initialIndex = TabStore.indexOf(category.param);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const foodItems = useMenu(TabStore[currentIndex]);
  console.log(foodItems);
  const card = (items = []) => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {items.map((item, id) => {
          return (
            <Card key={id} maxW="425px" paddingBottom={"15px"}>
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
          );
        })}
      </div>
    );
  };
  return (
    <div>
      <Banner />
      <div className="mt-16 max-w-[1320px] mx-auto">
        <Tabs index={currentIndex} onChange={(index) => setCurrentIndex(index)}>
          <TabList>
            <Tab>popular</Tab>
            <Tab>salad</Tab>
            <Tab>drinks</Tab>
            <Tab>dessert</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{card(foodItems)}</TabPanel>
            <TabPanel>{card(foodItems)}</TabPanel>
            <TabPanel>{card(foodItems)}</TabPanel>
            <TabPanel>{card(foodItems)}</TabPanel>
            <TabPanel>{card(foodItems)}</TabPanel>
            <TabPanel>{card(foodItems)}</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
