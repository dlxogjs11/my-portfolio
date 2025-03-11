import api from "../axiosInstance";

// 데이터 가져오기 (GET)
export const getCardData = async () => {
  try {
    const response = await api.get("/get/cards");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
