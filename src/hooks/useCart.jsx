import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data, refetch:fetchAgain } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart/${user.email}`);
      return res.data;
    },
  });
  return [data, fetchAgain];
};

export default useCart;
