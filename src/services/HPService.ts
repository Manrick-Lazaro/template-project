import axiosInstance from "./axiosInstance";

class HPService {
	public async allCharacters() {
		const response = await axiosInstance.get("characters");
		return response.data;
	}
}

export default new HPService();
