import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  const axiosSecure = useAxiosSecure();
  const {data, refetch:loadAgain} = useQuery({
    queryKey:['allFood', axiosSecure],
    queryFn: async() => {
      const result =await axiosSecure.get(`/food`)
      return result.data
    }
  })
  console.log(data)
  return [data, loadAgain]
};

export default useMenu;
