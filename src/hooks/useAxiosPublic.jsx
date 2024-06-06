import axios from "axios";

const publicInstance = axios.create({
  baseURL: "http://localhost:8000",
  // headers: {'X-Requested-With': 'XMLHttpRequest'},
});
// https://lala-sepia.vercel.app
const useAxiosPublic = () => {
  return publicInstance;
};

export default useAxiosPublic;
