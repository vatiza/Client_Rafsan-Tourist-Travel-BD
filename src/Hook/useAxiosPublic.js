import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://server-rafsan-tourist-travel-bd.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
