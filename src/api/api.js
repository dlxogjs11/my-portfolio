import api from "./axiosInstance";
import ENDPOINTS from "./apiBase";

export const callAPI = async (method, key, data = null, params = null) => {
  const url =
    typeof ENDPOINTS[key] === "function"
      ? ENDPOINTS[key](params)
      : ENDPOINTS[key];

  if (!url) throw new Error(`"${key}"에 해당하는 API 엔드포인트가 없습니다.`);

  try {
    const response = await api({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`API 요청 실패: ${key}`, error);
    throw error;
  }
};
