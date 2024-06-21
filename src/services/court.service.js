import axios from "axios";
import API_URL_ENV from "../configs/api";

const API_URL = API_URL_ENV + "/api/BadmintonCourt";
const headers = {
  "Content-Type": "application/json",
};

class CourtService {
  static async getAllCourts(token) {
    try {
      const response = await axios.get(`${API_URL}/get-all-badminton-courts`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.statusCode === 200) {
        return response.data.data;
      } else {
        console.error("Error fetching courts:", error);
      }
    } catch (error) {
      console.error("Error fetching courts: ", error);
    }
  }

  static async getCourtById(token, courtId) {
    try {
      const response = await axios.get(
        `${API_URL}/get-by-id?badmintonCourtId=${courtId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.statusCode === 200) {
        return response.data.data;
      }
    } catch (error) {
      console.error("Error fetching courts: ", error);
    }
  }

  static async searchCourt(token) {

  }
}

export default CourtService;
