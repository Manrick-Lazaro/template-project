import axiosInstance from "./axiosInstance";

class DisneyService {
	public async allCharacters() {
		const response = await axiosInstance.get("character");
		return response.data;
	}
}

export default new DisneyService();
