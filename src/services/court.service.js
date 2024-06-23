import axios from "axios";
import API_URL_ENV from "../configs/api";
import { getRequest } from ".";

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

  static async searchCourt(token) {}

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

  static async generateSlotByDate(badmintonCourtId, date, token) {
    try {
      const response = await getRequest(
        `${API_URL}/generate-slot-by-date?badmintonCourtId=${badmintonCourtId}&date=${date}`,
        token
      );

      console.log(response);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        console.error("Get Slot List By Court Code fail", response);
      }
    } catch (error) {
      console.error("Error fetching Slot List By Court Code", error);
    }
  }

  static async generateSlotByDateAndCourtCode(
    badmintonCourtId,
    date,
    courtCodeId,
    token
  ) {
    console.log("-------------", date, badmintonCourtId, courtCodeId);

    try {
      const response = await getRequest(
        `${API_URL}/generate-slot-by-date-and-court?badmintonCourtId=${badmintonCourtId}&courtId=${courtCodeId}&date=${date}`,
        token
      );

      console.log("response", response);

      if (response.statusCode === 200) {
        return response.data;
      } else {
        console.error("Get Slot List By Court Code fail", response);
      }
    } catch (error) {
      console.error("Error fetching Slot List By Court Code", error);
    }
  }
}

export default CourtService;
