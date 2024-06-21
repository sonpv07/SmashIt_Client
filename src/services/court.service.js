import axios from "axios";
import API_URL_ENV from "../configs/api";
import { getRequest } from ".";

const API_URL = API_URL_ENV + "/api/BadmintonCourt";
const headers = {
  "Content-Type": "application/json",
};

class CourtService {
  static async getAllCourt() {
    try {
      const response = await axios.get(
        `${API_URL}/get-all-badmintonton-courts`,
        { headers }
      );
      if (response.data.statusCode === 200) {
        return response.data.data;
      } else {
        console.error("Error fetching courts:", error);
      }
    } catch (error) {}
  }

  static async getCourtByOwner(ownerId, token) {
    try {
      const response = await getRequest(
        `${API_URL}/get-with-owner?ownerId=${ownerId}`,
        token
      );

      if (response.statusCode === 200) {
        return response.data;
      } else {
        console.error("fetching court by owner fail:", response);
      }
    } catch (error) {
      console.log("Error fetching court by owner", error);
    }
  }
}

export default CourtService;
