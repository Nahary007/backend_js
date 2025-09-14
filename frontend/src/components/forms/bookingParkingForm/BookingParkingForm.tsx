import React from 'react'
import ButtonForm from '../Button/ButtonForm';
import InputForm from '../InputForm/InputForm';
import styles from "./BookingParkingForm.module.css";
import type { Car } from '../../../pages/DashboarPage/DashboardPage';

interface BookingParkingFormProps {
  car: Car;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


function BookingParkingForm({ car, handleChange } : BookingParkingFormProps) {
  return (
    <div className={styles.formContainer}>
      <form>
        <h1>Ajouter un véhicule</h1>
        <section>
          <InputForm
            label=""
            placeholder="Nom du proprietaire"
            type="text"
            name="ownerName"
            value={car.ownerName}
            onChange={handleChange}
          />
        </section>

        <section>
          <InputForm
            label=""
            placeholder="Numero du véhicule"
            type="text"
            name="plateNumber"
            value={car.plateNumber}
            onChange={handleChange}
          />
        </section>

        <section className={styles.listBtn}>
          <ButtonForm 
            color={"primary"}
            text={"Ajouter"}
            ></ButtonForm>
          <ButtonForm 
            text={"Annuler"} 
            color={"gray"}            
          ></ButtonForm>
        </section>
      </form>
    </div>
  )
}

export default BookingParkingForm;