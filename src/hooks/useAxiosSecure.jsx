import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  baseURL: "http://localhost:8000",
});
//https://lala-sepia.vercel.app
const useAxiosSecure = () => {
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()
  instance.interceptors.request.use(
    function (config) {
      // console.log("hit from axiosSecure.");
      const token = localStorage.getItem("access_token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    }, 
    async function (err) {
      // console.log("err from axios", err.response.status);
      const status = err?.response?.status
      if(status == 401 || status == 403) {
        await logOut()
        navigate('/login')
      }
      return Promise.reject(err)
    }
  );

  return instance;
};

export default useAxiosSecure;
