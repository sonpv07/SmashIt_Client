import axios from "axios";
import API_URL_ENV from "../configs/api";



const API_URL = API_URL_ENV + '/BadmintonCourt/get-all-badmintonton-courts'

class CourtService {
    static async getAllCourt() {
        try {
            const response = await axios.get()

        } catch(error) {

        }
    }
}