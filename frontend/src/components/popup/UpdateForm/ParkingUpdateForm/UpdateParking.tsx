import { useState } from "react";
import styles from "./UpdateParking.module.css";
import type { Parking } from "../../../../pages/DashboarPage/DashboardPage";
import InputForm from "../../../forms/InputForm/InputForm";
import ButtonForm from "../../../forms/Button/ButtonForm";

interface UpdateParkingProps {
  parking: Parking;                         // Le parking à modifier
  onClose: () => void;                      // Fermer la popup
  onUpdate: (updatedParking: Parking) => void; // Action de validation
}

function UpdateParking({ parking, onClose, onUpdate }: UpdateParkingProps) {
  const [updatedParking, setUpdatedParking] = useState<Parking>(parking);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setUpdatedParking((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedParking);
    onClose();
  };

  return (
    <div className={styles.updateParkingPopup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier Parking</h2>
        <form onSubmit={handleSubmit}>
          <InputForm
            errorMessage=''
            label=""
            placeholder="Ex: Parking Central"
            type="text"
            name="name"
            value={updatedParking.name}
            onChange={handleChange}
          />

          <InputForm
            errorMessage=''
            label=""
            placeholder="Ex: Antananarivo"
            type="text"
            name="location"
            value={updatedParking.location}
            onChange={handleChange}
          />

          <InputForm
            errorMessage=''
            label=""
            placeholder="Ex: 50"
            type="number"
            name="capacity"
            value={updatedParking.capacity}
            onChange={handleChange}
          />

          <div className={styles.actions}>
            <ButtonForm type="submit" text="Mettre à jour" color="primary"/>
            <ButtonForm type="button" text="Annuler" color="gray" onClick={onClose} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateParking;
