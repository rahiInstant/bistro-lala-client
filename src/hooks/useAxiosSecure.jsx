import axios from "axios";

const instance = axios.create({
  baseURL: "https://lala-sepia.vercel.app",
});
//http://localhost:8000
const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
