import { useEffect, useState } from "react";
import styles from "./UpdateCar.module.css";
import type { Car } from "../../../../pages/DashboarPage/DashboardPage";
import InputForm from "../../../forms/InputForm/InputForm";
import ButtonForm from "../../../forms/Button/ButtonForm";

interface UpdateCarProps {
  car: Car;
  onClose: () => void;
  onUpdate: (updatedCar: Car) => void;
}

function UpdateCar({ car, onClose, onUpdate }: UpdateCarProps) {

  const [updatedCar, setUpdatedCar] = useState<Car>(car);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState<string>("");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedCar((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalCar = checked
      ? { ...updatedCar, startTime: new Date().toISOString() }
      : updatedCar;

    onUpdate(finalCar);
    onClose();
  };


  useEffect(() => { console.log(checked) }, [checked]);

  return (
    <div className={styles.updateCarPopup} onClick={onClose}>
      <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
        <h2>Modifier véhicule</h2>
        <form onSubmit={handleSubmit}>
          <InputForm
            errorMessage=''
            label=""
            placeholder="Ex: Jean Dupont"
            type="text"
            name="ownerName"
            value={updatedCar.ownerName}
            onChange={handleChange}
          />

          <InputForm
            errorMessage=''
            label=""
            placeholder="Ex: AB-123-CD"
            type="text"
            name="plateNumber"
            value={updatedCar.plateNumber}
            onChange={handleChange}
          />

          <InputForm
            errorMessage=''
            label=""
            placeholder="Duree"
            type="number"
            name="duration"
            value={updatedCar.duration}
            onChange={handleChange}
          />

          <div style={{ display: "flex", gap: "8px", paddingTop: "10px" }}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            Remettre à jour la date
          </div>

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
