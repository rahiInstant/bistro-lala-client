import Flicking from "@egjs/react-flicking";
import { useState } from "react";
import "@egjs/react-flicking/dist/flicking-inline.css";
import SectionHeader from "../../component/SectionHeader";
const OrderOnline = () => {
  const slides = [
    {
      img: `bg-[url('/home/slide1.jpg')]`,
      title: "Salad",
    },
    {
      img: `bg-[url('/home/slide2.jpg')]`,
      title: "Soups",
    },
    {
      img: `bg-[url('/home/slide3.jpg')]`,
      title: "Pizza",
    },
    {
      img: `bg-[url('/home/slide4.jpg')]`,
      title: "Desert",
    },
    {
      img: `bg-[url('/home/slide5.jpg')]`,
      title: "Cream",
    },
    {
      img: `bg-[url('/home/04.jpg')]`,
      title: "Juice",
    },
    {
      img: `bg-[url('/home/02.jpg')]`,
      title: "Chips",
    },
  ];
  return (
    <div className="mt-16 ">
        <SectionHeader
          title={"order online"}
          subTitle={"From 11:00am to 10:00pm"}
        ></SectionHeader>
      <Flicking align="prev" className="mt-12" circular={true}>
        {slides.map((item, id) => {
          return (
            <div
              key={id}
              className={`mr-5 relative h-[420px] w-[300px] ${item.img} bg-no-repeat bg-center bg-cover`}
            >
              <h1 className="text-3xl text-[#fff] absolute font-semibold bottom-0 w-full text-center left-1/2 -translate-x-1/2 p-4 bg-[#00000085]">
                {item.title}
              </h1>
            </div>
          );
        })}
      </Flicking>
    </div>
  );
};

export default OrderOnline;
