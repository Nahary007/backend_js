import { useState } from "react";
import styles from "./CarSection.module.css";
import { Minus, Plus } from "lucide-react";
import BookingParkingForm from "../../forms/bookingParkingForm/BookingParkingForm";
import type { Car, Parking } from "../../../pages/DashboarPage/DashboardPage";
import ListCar from "../../list/ListCar/ListCar";
import Dropdown from "../../dropdown/Dropdown";

interface CarSectionProps {
  car: Car;
  parkingList : Parking[];
  getParkingSelected : (parking: Parking) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CarSection({ car, parkingList,  handleChange, getParkingSelected }: CarSectionProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.carSection}>
      <div className={styles.car}>
        {/* Ouvre le formulaire */}
        <span className={styles.btnOpenForm} onClick={() => setIsActive(!isActive)}>
          {isActive ? <Minus /> : <Plus />}
        </span>

        <div className={styles.carListHeader}>
          <Dropdown
            parkingList={parkingList}
            getParkingSelected={getParkingSelected}
          ></Dropdown>
        </div>

        <ListCar
        ></ListCar>
      </div>

      <div className={`${styles.addForm} ${isActive ? styles.active : ""}`}>
        <BookingParkingForm
          car={car}
          handleChange={handleChange}
        ></BookingParkingForm>
      </div>
    </div>
  )
}

export default CarSection;