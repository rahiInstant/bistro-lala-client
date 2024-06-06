import MenuSection from "../../component/MenuSection";
import Banner from "./Banner";
import useMenu from "../../hooks/useMenu";
import useSeparation from "../../hooks/useSeparation";

const OurMenu = () => {
  const sub = `Lorem Ipsum has been the industry’s standard 
  dummy text ever since the 1500s, when an unknown printer 
  took a galley of type and scrambled it to make a type 
  specimen book.`;
  //   console.log(popular,salad,drinks,dessert,pizza,soup)
  
  return (
    <div>
      <Banner />
      <MenuSection category="popular" foodList={useSeparation("popular")} />
      <MenuSection
        category="dessert"
        foodList={useSeparation("dessert")}
        title="desserts"
        subTitle={sub}
      />
      <MenuSection
        category="pizza"
        foodList={useSeparation("pizza")}
        title="pizza"
        subTitle={sub}
      />
      <MenuSection
        category="salad"
        foodList={useSeparation("salad")}
        title="salad"
        subTitle={sub}
      />
      <MenuSection
        category="drinks"
        foodList={useSeparation("drinks")}
        title="drinks"
        subTitle={sub}
      />
      <MenuSection
        category="soup"
        foodList={useSeparation("soup")}
        title="soup"
        subTitle={sub}
      />
    </div>
  );
};

export default OurMenu;
