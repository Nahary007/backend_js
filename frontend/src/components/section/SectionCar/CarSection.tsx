import { useEffect, useState } from "react";
import styles from "./CarSection.module.css";
import { Minus, Plus } from "lucide-react";
import BookingParkingForm from "../../forms/bookingParkingForm/BookingParkingForm";
import type { Car, Parking } from "../../../pages/DashboarPage/DashboardPage";
import ListCar from "../../list/ListCar/ListCar";
import Dropdown from "../../dropdown/Dropdown";

interface CarSectionProps {
  search: string;
  carDataForm: Car;
  selectedParking: Parking | null;
  parkingList: Parking[];
  getParkingSelected: (parking: Parking) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
  resetCarDataForm: () => void
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectCarToUpdate: (car: Car) => void
}

function CarSection(
  {
    search,
    carDataForm,
    selectedParking,
    parkingList,
    onSubmit,
    handleChange,
    getParkingSelected,
    resetCarDataForm,
    onDelete,
    selectCarToUpdate
  }: CarSectionProps) {

  const [isActive, setIsActive] = useState(false);
  const [totalCar, setTotalCar] = useState(0);

  const handleTotalCar = (nbr: number) => {
    setTotalCar(nbr);
  }

  useEffect(() => {
    getParkingSelected(parkingList[0]);
  }, []);

  return (
    <div className={styles.carSection}>
      <div className={styles.car}>
        {/* Ouvre le formulaire */}
        {selectedParking && totalCar < selectedParking.capacity && (
          <span className={styles.btnOpenForm} onClick={() => setIsActive(!isActive)}>
            {isActive ? <Minus /> : <Plus />}
          </span>
        )}

        <div className={styles.carListHeader}>
          <Dropdown
            parkingList={parkingList}
            getParkingSelected={getParkingSelected}
          ></Dropdown>
        </div>

        <ListCar
          search={search}
          handleTotalCar={handleTotalCar}
          selectedParking={selectedParking}
          selectCarToUpdate={selectCarToUpdate}
          onDelete={onDelete}
        ></ListCar>
      </div>

      {
        selectedParking && totalCar < selectedParking.capacity && <div className={`${styles.addForm} ${isActive ? styles.active : ""}`}>
          <BookingParkingForm
            carDataForm={carDataForm}
            onSubmit={onSubmit}
            handleChange={handleChange}
            resetCarDataForm={resetCarDataForm}
            closeForm={() => setIsActive(false)}
          ></BookingParkingForm>

        </div>
      }
    </div>
  )
}

export default CarSection;