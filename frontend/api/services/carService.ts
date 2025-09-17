import axios from "axios";

const API_URL = "http://localhost:3000/vehicles";
export const queryKeyCar = "carList";

export const getCars = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export async function createCar( data: {
    plateNumber : string;
    ownerName   : string;
    parkingId   : number;
    startTime   : string;
    duration    : number;
} ) {
    const response = await axios.post(API_URL, data);
    return response.data;
}

export async function deleteCar(id: number) {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
}

export async function updateCar(id: number, dto: { plateNumber?: string; ownerName?: string; duration?: number; startTime?: string }) {
  const response = await axios.put(`${API_URL}/${id}`, dto);
  return response.data;
}

export async function getCarsByParking(parkingId: number) {
  const response = await axios.get(`${API_URL}/parking/${parkingId}`);
  return response.data;
}
