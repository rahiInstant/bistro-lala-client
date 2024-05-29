import { useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useCheck = () => {
  const axiosPublic = useAxiosPublic();
  return function (name, email) {
    axiosPublic.post("/users", { name, email }).then((res) => {
      console.log(res.data);
      //   console.log(res.data);
      //   if (res.data.insertedId) {
      //     console.log()
      //   }
    });
  };
};

export default useCheck;
