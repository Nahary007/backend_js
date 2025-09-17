import axios from "axios";

const API_URL = "http://localhost:3000/parkings";
export const queryKeyParking = "parkingList";

export const getParkings = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export async function createParking(data: {
  name: string;
  location: string;
  capacity: number;
}) {
  const response = await axios.post(API_URL, data);
  return response.data;
}

export async function deleteParking(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

export async function updateParking(id: number, dto: { name?: string; location?: string; capacity?: number }) {
  const response = await axios.put(`${API_URL}/${id}`, dto);
  return response.data;
}