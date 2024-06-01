import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});
//https://lala-sepia.vercel.app
const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
