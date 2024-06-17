import axios from "axios";
import { baseURL } from "../constants/constants";

const headers = {
  "Content-Type": "application/json",
};

const getAllCourt = async () => {
  try {
    console.log(`${baseURL}/BadmintonCourt/get-all-badmintonton-courts`);
    const res = await axios.get(
      `https://8ecf-115-73-185-11.ngrok-free.app/api/BadmintonCourt/get-all-badmintonton-courts
`,
      { headers }
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching courts:", error);
  }
};

export default { getAllCourt };
