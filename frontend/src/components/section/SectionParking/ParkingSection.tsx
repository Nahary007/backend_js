import { useEffect, useRef, useState } from "react";
import styles from "./ParkingSection.module.css";
import AddParkingForm from "../../forms/addParkingForm/AddParkingForm.tsx";
import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import { Plus, Minus } from "lucide-react";
import ListParking from "../../list/ListParking/ListParking";

interface ParkingSectionProps {
  parkingDataForm : Parking;
  parkingList : Parking[];
  handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: number) => void;
  resetParkingDataForm : () => void;
  onSubmit: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ParkingSection({ parkingDataForm,parkingList,onSubmit, handleChange, onDelete, resetParkingDataForm }: ParkingSectionProps) {

  const [isActive, setIsActive] = useState(false);


  return (
    <div className={styles.parkingSection} >
      <div className={styles.liste}>

        {/* Ouvre le formulaire */}
        <span className={styles.btnOpenForm} onClick={() => setIsActive(!isActive)}>
          {isActive ? <Minus/> : <Plus/>}
        </span>

        <div className={ styles.listHeader }>
          <h1>Liste des parkings</h1>
        </div>

        <div className={styles.listBody}>
          <ListParking
            parkingList={parkingList}
            onDelete = {onDelete}
          ></ListParking>
        </div>

      </div>

      <section className={`${styles.addForm} ${isActive ? styles.active : ""}`}>
          <AddParkingForm
            onSubmit={onSubmit}
            parkingDataForm={parkingDataForm}
            handleChange={handleChange}
            resetParkingDataForm = { resetParkingDataForm }
            closeForm={() => setIsActive(false) }
          ></AddParkingForm>
      </section>
    </div>
  )
}

export default ParkingSection;
