import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "https://api.disneyapi.dev/",
});

export default axiosInstance;
