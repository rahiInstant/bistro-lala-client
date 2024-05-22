import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = (category) => {
  const [food, setFood] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/food?category=${category}`).then((res) => {
      // console.log(res.data);
      setFood(res.data);
    });
  }, [axiosSecure, category]);
  return food;
};

export default useMenu;
