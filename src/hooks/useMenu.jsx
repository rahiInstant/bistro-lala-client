import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = (category) => {
  const [food, setFood] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/food?category=${category}`).then((res) => {
      setFood(res.data);
    });
  }, [axiosSecure, category]);
  return food;
};

export default useMenu;
