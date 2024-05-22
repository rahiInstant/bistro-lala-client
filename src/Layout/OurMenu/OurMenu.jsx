import MenuSection from "../../component/MenuSection";
import Banner from "./Banner";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const sub = `Lorem Ipsum has been the industry’s standard 
  dummy text ever since the 1500s, when an unknown printer 
  took a galley of type and scrambled it to make a type 
  specimen book.`;
  //   console.log(popular,salad,drinks,dessert,pizza,soup)
  return (
    <div>
      <Banner />
      <MenuSection category="popular" foodList={useMenu("popular")} />
      <MenuSection
        category="dessert"
        foodList={useMenu("dessert")}
        title="desserts"
        subTitle={sub}
      />
      <MenuSection
        category="pizza"
        foodList={useMenu("pizza")}
        title="pizza"
        subTitle={sub}
      />
      <MenuSection
        category="salad"
        foodList={useMenu("salad")}
        title="salad"
        subTitle={sub}
      />
      <MenuSection
        category="drinks"
        foodList={useMenu("drinks")}
        title="drinks"
        subTitle={sub}
      />
      <MenuSection
        category="soup"
        foodList={useMenu("soup")}
        title="soup"
        subTitle={sub}
      />
    </div>
  );
};

export default OurMenu;
