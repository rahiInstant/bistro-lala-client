import { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import Swal from "sweetalert2";
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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { AuthContext } from "../../Auth/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import toast from "react-hot-toast";
import useCart from "../../hooks/useCart";
import useSeparation from "../../hooks/useSeparation";
import useAdmin from "../../hooks/useAdmin";

const OurShop = () => {
  const TabStore = ["popular", "salad", "drinks", "dessert", "pizza", "soup"];
  const category = useParams();
  const initialIndex = TabStore.indexOf(category.param);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const foodItems = useSeparation(TabStore[currentIndex]);
  const { user } = useContext(AuthContext);
  const [data] = useAdmin();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const successMsg = (msg) => toast.success(msg);
  const [isDisabledAdd, setIsDisabled] = useState(false);
  const [, fetchAgain] = useCart();
  const handleAddToCart = (item) => {
    setIsDisabled(true);
    // console.log(item);
    const { _id, name, recipe, image, category, price } = item;
    if (user) {
      const cartInfo = {
        menuID: _id,
        email: user?.email,
        name,
        recipe,
        image,
        category,
        price,
        orderID: Math.floor(Math.random() * 10000000 + 100).toString(16),
      };
      axiosSecure.post("/cart", cartInfo).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          successMsg("Add to cart successfully.");
          fetchAgain();
          setIsDisabled(false);
        }
      });
    } else {
      Swal.fire({
        title: "You are not login.",
        text: "You cannot add to cart without login.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go to login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    }
  };
  const card = (items = []) => {
    return (
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items.map((item, id) => {
          return (
            <SwiperSlide key={id}>
              <Card
                maxW="425px"
                marginBottom={"40px"}
                marginTop={"20px"}
                paddingBottom={"15px"}
              >
                <CardBody>
                  <Image
                    src={item?.image}
                    alt="Green double couch with wooden legs"
                    //   borderRadius="lg"
                    width={"100%"}
                    height={"350px"}
                  />
                  <Stack mt={"10px"} spacing="3">
                    <Heading size="md" textAlign={"center"}>
                      {item.name}
                    </Heading>
                    <Text textAlign={"center"}>{item.recipe}</Text>
                  </Stack>
                </CardBody>
                <div className="flex justify-center">
                  <Button
                    onClick={() => handleAddToCart(item)}
                    isDisabled={isDisabledAdd}
                    w={"fit-content"}
                    borderBottom={"4px solid #BB8506"}
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
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
