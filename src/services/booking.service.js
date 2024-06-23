import axios from "axios";
import API_URL_ENV from "../configs/api";
import { getRequest } from ".";
import { Alert } from "react-native";

const API_URL = API_URL_ENV + "/api/Booking";

class BookingService {
  static async createBooking(token, booking) {
    try {
      const response = await axios.post(`${API_URL}/create-booking`, booking, {
        headers: {
          // "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      if (response.data.statusCode === 200) {
        Alert.alert('Success', 'Booking created successfully.');
        return response.data.data;
      } else {
        console.error("Error fetching create booking:", response.data.statusCode);
      }
    } catch (error) {
        console.error("Error fetching  create booking:: ", error);
    }
  }
  static async getAllBookings(token) {
    try {
        const response = await axios.post(`${API_URL}/get-all-bookings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.statusCode === 200) {
          Alert.alert('Success', 'Booking created successfully.');
          return response.message;
        } else {
          console.error("Error fetching create booking:");
        }
      } catch (error) {
          console.error("Error fetching  create booking:: ", error);
      }
  }
}

export default BookingService
