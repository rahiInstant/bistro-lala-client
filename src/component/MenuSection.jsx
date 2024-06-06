import { useEffect, useState } from "react";
import Paralax from "./Paralax";
import SectionHeader from "./SectionHeader";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MenuSection = ({ title, subTitle, foodList, category}) => {
  const menu = (id, name, description, price) => (
    <div key={id} className="flex items-center gap-5">
      <div className="">
        <img
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-28 h-28 "
          src="/home/slide1.jpg"
          alt=""
        />
      </div>
      <div className="flex gap-3 flex-1">
        <div>
          <h1 className="text-xl font-medium">{name} ------------------</h1>
          <p>{description}</p>
        </div>
        <div className="text-xl">
          <h2>{price}</h2>
        </div>
      </div>
    </div>
  );
  return (
    <div className="mt-20 ">
      {title && <Paralax title={title} subTitle={subTitle} />}
      {!title && (
        <SectionHeader subTitle={"Don't miss"} title={"TODAY'S OFFER"} />
      )}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1320px] mx-auto">
        {foodList?.map((item, id) =>
          menu(id, item.name, item.recipe, item.price)
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/our-shop/${category}`}>
          <button className="p-3 border-b-4 rounded-xl">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuSection;


