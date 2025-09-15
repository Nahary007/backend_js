import { useState } from "react";
import styles from "./UpdateCar.module.css";
import type { Car } from "../../../../pages/DashboarPage/DashboardPage";
import InputForm from "../../../forms/InputForm/InputForm";
import ButtonForm from "../../../forms/Button/ButtonForm";

interface UpdateCarProps {
  car: Car ;
  onClose: () => void;
  onUpdate: (updatedCar: Car) => void;
}

function UpdateCar({ car, onClose, onUpdate }: UpdateCarProps) {
  const [updatedCar, setUpdatedCar] = useState<Car>(car);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCar((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(updatedCar);
    onClose();
  };

  return (
    <div className={styles.updateCarPopup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier véhicule</h2>
        <form onSubmit={handleSubmit}>
          <InputForm
            label=""
            placeholder="Ex: Jean Dupont"
            type="text"
            name="ownerName"
            value={updatedCar.ownerName}
            onChange={handleChange}
          />

          <InputForm
            label=""
            placeholder="Ex: AB-123-CD"
            type="text"
            name="plateNumber"
            value={updatedCar.plateNumber}
            onChange={handleChange}
          />

          <div className={styles.actions}>
            <ButtonForm 
              type="submit" 
              text="Mettre à jour" 
              color="primary"
            />
            <ButtonForm 
              type="button" 
              text="Annuler"
              color="gray"
              onClick={onClose} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateCar;
