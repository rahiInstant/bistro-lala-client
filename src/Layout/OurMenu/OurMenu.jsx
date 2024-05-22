import { useEffect, useState } from "react";
import MenuSection from "../../component/MenuSection";
import Banner from "./Banner";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const popular = useMenu("popular");
  const salad = useMenu("salad");
  const drinks = useMenu("drinks");
  const dessert = useMenu("dessert");
  const pizza = useMenu("pizza");
  const soup = useMenu("soup");

  const sub = `Lorem Ipsum has been the industry’s standard 
  dummy text ever since the 1500s, when an unknown printer 
  took a galley of type and scrambled it to make a type 
  specimen book.`;
  //   console.log(popular,salad,drinks,dessert,pizza,soup)
  return (
    <div>
      <Banner />
      <MenuSection category="popular" foodList={popular} />
      <MenuSection
        category="dessert"
        foodList={dessert}
        title="desserts"
        subTitle={sub}
      />
      <MenuSection
        category="pizza"
        foodList={pizza}
        title="pizza"
        subTitle={sub}
      />
      <MenuSection
        category="salad"
        foodList={salad}
        title="salad"
        subTitle={sub}
      />
      <MenuSection
        category="drinks"
        foodList={drinks}
        title="drinks"
        subTitle={sub}
      />
      <MenuSection
        category="soup"
        foodList={soup}
        title="soup"
        subTitle={sub}
      />
    </div>
  );
};

export default OurMenu;
