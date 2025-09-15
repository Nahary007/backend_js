import { useState } from "react";
import styles from "./CarSection.module.css";
import { Minus, Plus } from "lucide-react";
import BookingParkingForm from "../../forms/bookingParkingForm/BookingParkingForm";
import type { Car, Parking } from "../../../pages/DashboarPage/DashboardPage";
import ListCar from "../../list/ListCar/ListCar";
import Dropdown from "../../dropdown/Dropdown";

interface CarSectionProps {
  carDataForm: Car;
  parkingList : Parking[];
  getParkingSelected : (parking: Parking) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
  resetCarDataForm : () => void
  onSubmit : (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectCarToUpdate: (car: Car) => void
}

function CarSection(
  { 
    carDataForm, 
    parkingList,
    onSubmit, 
    handleChange, 
    getParkingSelected, 
    resetCarDataForm, 
    onDelete,
    selectCarToUpdate
  }: CarSectionProps) {

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
          selectCarToUpdate={selectCarToUpdate}
          onDelete={onDelete} 
        ></ListCar>
      </div>

      <div className={`${styles.addForm} ${isActive ? styles.active : ""}`}>
        <BookingParkingForm
          carDataForm={carDataForm}
          onSubmit={onSubmit}
          handleChange={ handleChange }
          resetCarDataForm = {resetCarDataForm}
          closeForm={ () => setIsActive(false) }
        ></BookingParkingForm>
      </div>
    </div>
  )
}

export default CarSection;