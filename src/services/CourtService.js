import axios from "axios";
import { baseURL } from "../constants/constants";
import { getRequest } from ".";

const headers = {
  "Content-Type": "application/json",
};

const getAllCourt = async (token) => {
  try {
    const res = await getRequest(
      `${baseURL}/BadmintonCourt/get-all-badmintonton-courts`,
      token
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching courts:", error);
  }
};

export default { getAllCourt };
