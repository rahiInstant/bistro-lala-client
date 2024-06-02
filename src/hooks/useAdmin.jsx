import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Auth/AuthContext";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);
  const { data, isPending } = useQuery({
    queryKey: ["isUserExist", user],
    queryFn: async () => {
      const result = await axiosSecure.get(`/user-role?email=${user?.email}`);
      
      return result.data;
    },
  });
  return [data, isPending, loading];
};

export default useAdmin;
