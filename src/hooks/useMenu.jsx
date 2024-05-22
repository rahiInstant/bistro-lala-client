import { useEffect, useState } from "react";

const useMenu = (category) => {
  const [food, setFood] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, []);
  const specific = food.filter((item) => item.category === category);
  return specific;
};

export default useMenu;
