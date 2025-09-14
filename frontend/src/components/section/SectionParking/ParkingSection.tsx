import { useEffect, useRef, useState } from "react";
import styles from "./ParkingSection.module.css";
import AddParkingForm from "../../forms/addParkingForm/AddParkingForm.tsx";
import type { Parking } from "../../../pages/DashboarPage/DashboardPage";
import { Plus, Minus } from "lucide-react";
import ListParking from "../../list/ListParking/ListParking";

interface ParkingSectionProps {
  parking : Parking;
  handleChange : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ParkingSection({ parking, handleChange }: ParkingSectionProps) {

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
          <ListParking></ListParking>
        </div>

      </div>

      <section className={`${styles.addForm} ${isActive ? styles.active : ""}`}>
          <AddParkingForm
            parking={parking}
            handleChange={handleChange}
          ></AddParkingForm>
      </section>
    </div>
  )
}

export default ParkingSection;
