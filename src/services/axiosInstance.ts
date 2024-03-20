import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://hp-api.onrender.com/api/",
});

export default axiosInstance;
