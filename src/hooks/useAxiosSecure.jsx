import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});
//https://lala-sepia.vercel.app
const useAxiosSecure = () => {
  instance.interceptors.request.use(
    function (config) {
      console.log("hit from axiosSecure.");
      const token = localStorage.getItem("access_token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  return instance;
};

export default useAxiosSecure;
