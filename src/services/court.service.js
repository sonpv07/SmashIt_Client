import axios from "axios";
import API_URL_ENV from "../configs/api";



const API_URL = API_URL_ENV + '/api/BadmintonCourt'
const headers = {
    "Content-Type": "application/json",
  };

class CourtService {
    static async getAllCourt() {
        try {
            const response = await axios.get(`${API_URL}/get-all-badmintonton-courts`, {headers});
            if(response.data.statusCode === 200) {
                return response.data.data;
            } else {
                console.error("Error fetching courts:", error);
            }
        } catch(error) {

        }
    }
}