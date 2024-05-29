import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data, refetch: fetchAgain } = useQuery({
    queryKey: ["cart", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/cart?userMail=${user.email}`);
      return res.data;
    },
    enabled: !!user,
  });
  // console.log("from use cart hook", data);

  return [data, fetchAgain];
};

export default useCart;
