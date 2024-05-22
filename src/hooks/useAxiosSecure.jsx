import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});

const useAxiosSecure = () => {
  return instance;
};

export default useAxiosSecure;
